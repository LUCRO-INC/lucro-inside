import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Environments
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const baseUrl = environment.url;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  contact(message: any) {
    console.log(message);
    return this.http.get(
      baseUrl +
        `servicios/contacto.php?nombre=${message.nombre}&correo=${message.nombre}&telefono=${message.telefono}&pais=${message.pais}&empresa=${message.empresa}&sector=${message.sector}&web=${message.web}&empleados=${message.empleados}&mensaje=${message.mensaje}`
    );
  }
}
