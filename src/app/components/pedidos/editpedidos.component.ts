import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidos } from 'src/app/model/pedidos';
import { PedidosService } from 'src/app/service/pedidos.service';

@Component({
  selector: 'app-editpedidos',
  templateUrl: './editpedidos.component.html',
  styleUrls: ['./editpedidos.component.css']
})

export class EditpedidosComponent implements OnInit {
  pedidos: Pedidos = null;

  //alerts
  successMessage: string;
  errorMessage: string;
  estadoPedido: string;


  constructor(
    private pedidosS: PedidosService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.pedidosS.detail(id).subscribe(
      data =>{
        this.pedidos = data;
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
    this.pedidosS.update(id, this.pedidos).subscribe(
      data => {
        this.successMessage = "editado correctamente, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
        this.estadoPedido = 'Realizado';
      }, err => {
        this.errorMessage = "Error al modificar.";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2500);
      }
    )
  }
}

