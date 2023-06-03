import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-entradas',
  templateUrl: './new-entradas.component.html',
  styleUrls: ['./new-entradas.component.css']
})
export class NewEntradasComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  fechaInicioE: string = '';
  fechaFinE: string = '';
  successMessage: string;
  errorMessage: string;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fechaInicioE, this.fechaFinE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        this.successMessage = "Añadiste una nueva entrada, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err => {
        this.errorMessage = "Error al añadir la entrada.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }

}