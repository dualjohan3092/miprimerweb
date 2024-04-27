
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  backendLocalPort: string = process.env.BACKEND_LOCAL_PORT || '3000'; // Puerto local del backend
  backendIP: string = process.env.BACKEND_IP || 'localhost'; // Dirección IP del backend
  apiUrl: string = `http://${this.backendIP}:${this.backendLocalPort}/`; // URL de tu API

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

}



/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  apiUrl: string = 'http://localhost:3000/'; // URL de tu API

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

}
*/