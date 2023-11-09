import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/model/empleados';
import { EmpleadosService } from 'src/app/service/empleados.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {

  
  nombreEmpleado: string;
  rolEmpleado: string;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private empleadosS: EmpleadosService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const empleados = new Empleados(this.nombreEmpleado, this.rolEmpleado);
    this.empleadosS.save(empleados).subscribe(
      data =>{
        this.successMessage = "Añadiste un nuevo empleado, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir empleado...";
      }
    )
  }

}
