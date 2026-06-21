import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from '../project.model';
import { DeviceFrame } from '../device-frame/device-frame';

@Component({
  selector: 'app-lightbox',
  imports: [DeviceFrame],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.aria-label]': 'project().name',
    '(click)': 'onBackdrop($event)',
    '(document:keydown.escape)': 'close.emit()',
    '(keydown)': 'onKeydown($event)',
  },
})
export class Lightbox {
  readonly project = input.required<Project>();
  readonly close = output<void>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    afterNextRender(() => {
      this.closeButton()?.nativeElement.focus();
      this.document.body.style.overflow = 'hidden';
    });
    inject(DestroyRef).onDestroy(() => {
      this.document.body.style.overflow = '';
    });
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === this.host.nativeElement) {
      this.close.emit();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return;
    }
    const focusables = this.host.nativeElement.querySelectorAll<HTMLElement>(
      'a[href], button',
    );
    if (focusables.length === 0) {
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = this.document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
