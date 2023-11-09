import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingresos } from 'src/app/model/ingresos';
import { IngresosService } from 'src/app/service/ingresos.service';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent implements OnInit {

  
  fechaIngreso: string;
  gananciaIngreso: string;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private ingresosS: IngresosService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const ingresos = new Ingresos(this.fechaIngreso, this.gananciaIngreso);
    this.ingresosS.save(ingresos).subscribe(
      data =>{
        this.successMessage = "Añadiste un nuevo ingreso, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir el ingreso...";
      }
    )
  }

}
