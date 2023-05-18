import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  successMessage: string;
  errorMessage: string;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        this.errorMessage = "Error al modificar, revisa los campos.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.successMessage = "Skill editada correctamente, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }, err => {
        this.errorMessage = "Error al modificar, revisa los campos.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }
}
