import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  fechaActual: Date;
  horaActual: string;

  constructor() {
    this.fechaActual = new Date();
    this.obtenerHoraActual();
  }

  obtenerHoraActual() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Argentina/Buenos_Aires',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false // Para mostrar la hora en formato de 24 horas
    };

    this.horaActual = new Intl.DateTimeFormat('es-AR', options).format(this.fechaActual);
  }
}
