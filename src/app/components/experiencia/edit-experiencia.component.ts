import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  successMessage: string;
  errorMessage: string;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        this.errorMessage = "Error al modificar, revisa los campos.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.successMessage = "Experiencia editada correctamente, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al modificar, revisa los campos.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }

}