import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service'; // Asegúrate de importar tu servicio de tokens
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fechaActual: Date;
  horaActual: string;

  constructor(private tokenService: TokenService, private router: Router) {
    this.fechaActual = new Date();
    this.obtenerHoraActual();
  }

  ngOnInit(): void {
    const isAdmin = this.tokenService.hasRole('ROLE_ADMIN');
    if (!isAdmin) {
      this.router.navigate(['/']); 
    }
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