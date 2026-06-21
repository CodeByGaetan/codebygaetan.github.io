import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

const ENDPOINT = 'https://api.web3forms.com/submit';

/** Sends the contact form through Web3Forms (no back-end of our own). */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(data: ContactMessage): Observable<boolean> {
    const body = {
      access_key: environment.web3formsAccessKey,
      from_name: data.name,
      email: data.email,
      subject: `Portfolio — nouveau message de ${data.name}`,
      message: data.message,
    };
    return this.http
      .post<Web3FormsResponse>(ENDPOINT, body)
      .pipe(map((response) => response.success));
  }
}
