import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Environments
import { environment } from 'src/environments/environment';

const baseUrl = environment.url;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  contact(message: any) {
    return this.http
      .post(baseUrl + 'servicios/contacto.php', message)
      .toPromise();
  }
}
