import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/model/empleados';
import { EmpleadosService } from 'src/app/service/empleados.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleados[] = [];

  constructor(private empleadosS: EmpleadosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEmpleados();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEmpleados(): void{
    this.empleadosS.lista().subscribe(
      data =>{
        this.empleados = data;
      }
    )
  }
  
  delete(id?: number){
    if( id != undefined){
      this.empleadosS.delete(id).subscribe(
        data => {
          this.cargarEmpleados();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
