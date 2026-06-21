import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet, isPlatformBrowser } from '@angular/common';
import { Project } from '../project.model';

/**
 * Presents a project inside its device frame: a plain screen for web, an iPhone
 * frame for mobile. The still image is shown at rest; the muted looping video
 * fades in and plays while `active` is true (card hover).
 */
@Component({
  selector: 'app-device-frame',
  imports: [NgTemplateOutlet],
  templateUrl: './device-frame.html',
  styleUrl: './device-frame.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceFrame {
  readonly project = input.required<Project>();
  readonly active = input(false);

  private readonly video = viewChild<ElementRef<HTMLVideoElement>>('video');
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    effect(() => {
      if (!this.isBrowser) {
        return;
      }
      const el = this.video()?.nativeElement;
      if (!el) {
        return;
      }
      if (this.active()) {
        void el.play().catch(() => {});
      } else {
        el.pause();
        el.currentTime = 0;
      }
    });
  }
}
