import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  successMessage: string;
  errorMessage: string;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        this.successMessage = "Skill creada correctamente, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir el skill, revisa los campos.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }
}
