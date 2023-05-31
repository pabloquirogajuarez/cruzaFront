import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  fechaInicioE: string;
  fechaFinE: string;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.fechaInicioE, this.fechaFinE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        this.successMessage = "Añadiste una nueva educación, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir la educación.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }

}
