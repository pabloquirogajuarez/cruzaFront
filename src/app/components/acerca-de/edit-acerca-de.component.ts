import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{
  persona: persona = null;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
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
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.successMessage = "Perfil editado correctamente, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err => {
        this.errorMessage = "Error al modificar el perfil.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }


}
