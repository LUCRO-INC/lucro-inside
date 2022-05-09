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
  constructor(private http: HttpClient) { }

  contact(message: any) {
    return this.http
      .get(baseUrl + 'servicios/contacto.php?nombre=' + message.nombre + '&correo=' + message.correo + '&pais=' + message.pais + '&empresa=' + message.empresa
        + '&sector=' + message.sector + '&web=' + message.web + '&empleados=' + message.empleados + '&mensaje=' + message.mensaje, { responseType: 'text' });
  }
}
