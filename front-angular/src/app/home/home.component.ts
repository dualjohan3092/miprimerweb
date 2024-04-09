import {Component, inject} from '@angular/core';
import { HomeServiceService } from './home-service.service'; // Importa el servicio

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mensaje: string = '';
  title: string = 'Front Angular';
  constructor(private homeService: HomeServiceService) {}


  accionBoton() {
    this.homeService.obtenerDatos().subscribe(
      (data) => {
        console.log(data);
        this.mensaje = 'API llamada con éxito: ' + data;

      },
      (error) => {
        console.error('Error al llamar a la API:', error);
        this.mensaje = 'Error al llamar a la API';
      }
    );
    this.mensaje = '¡Has hecho clic en el botón!';
  }
}
