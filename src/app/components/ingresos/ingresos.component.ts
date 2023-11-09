import { Component, OnInit } from '@angular/core';
import { Ingresos } from 'src/app/model/ingresos';
import { IngresosService } from 'src/app/service/ingresos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingresos[] = [];

  constructor(private ingresosS: IngresosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarIngresos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarIngresos(): void{
    this.ingresosS.lista().subscribe(
      data =>{
        this.ingresos = data;
      }
    )
  }
  
  delete(id?: number){
    if( id != undefined){
      this.ingresosS.delete(id).subscribe(
        data => {
          this.cargarIngresos();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
