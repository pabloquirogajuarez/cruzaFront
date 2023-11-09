import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/model/reservas';
import { ReservasService } from 'src/app/service/reservas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservas: Reservas[] = [];

  constructor(private reservasS: ReservasService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarReservas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarReservas(): void{
    this.reservasS.lista().subscribe(
      data =>{
        this.reservas = data;
      }
    )
  }
  
  delete(id?: number){
    if( id != undefined){
      this.reservasS.delete(id).subscribe(
        data => {
          this.cargarReservas();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
