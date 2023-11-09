import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservas } from 'src/app/model/reservas';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {

  
  numeroReserva: string;
  nombreClienteReserva: string;
  telefonoReserva: string;
  fechaReserva: string;
  horaReserva: string;
  numeroPersonasReserva: string;
  eventoReserva: string;
  observacionesReserva: string;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private reservasS: ReservasService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {

    const reservas = new Reservas(this.numeroReserva, this.nombreClienteReserva, this.telefonoReserva, this.fechaReserva, this.horaReserva, this.numeroPersonasReserva, this.eventoReserva, this.observacionesReserva);
    this.reservasS.save(reservas).subscribe(
      data =>{
        this.successMessage = "Añadiste una reserva, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir la reserva.";
      }
    )
  }

}
