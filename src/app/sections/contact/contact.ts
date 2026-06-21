import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/contact.service';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly status = signal<Status>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Honeypot: hidden from users, only bots fill it.
    company: [''],
  });

  submit(): void {
    if (this.form.controls.company.value) {
      // Bot detected — pretend success without sending anything.
      this.status.set('success');
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const { name, email, message } = this.form.getRawValue();
    this.contactService.send({ name, email, message }).subscribe({
      next: (ok) => {
        if (ok) {
          this.status.set('success');
          this.form.reset();
        } else {
          this.status.set('error');
        }
      },
      error: () => this.status.set('error'),
    });
  }
}
