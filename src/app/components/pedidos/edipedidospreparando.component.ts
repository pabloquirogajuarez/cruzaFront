import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedidos } from 'src/app/model/pedidos';
import { PedidosService } from 'src/app/service/pedidos.service';

@Component({
  selector: 'app-edipedidospreparando',
  templateUrl: './edipedidospreparando.component.html',
  styleUrls: ['./edipedidospreparando.component.css']
})
export class EdipedidospreparandoComponent implements OnInit {
  pedidos: Pedidos = null;

  //alerts
  successMessage: string;
  errorMessage: string;
  estadoPedidoNuevo: string;


  constructor(
    private pedidosS: PedidosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.pedidosS.detail(id).subscribe(
        data => {
          this.pedidos = data;
          this.pedidos.estadoPedido = 'Preparando';
        },
        err => {
          this.errorMessage = "Error al modificar, revisa los campos.";
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2500);
        }
      );
      }

      onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.pedidosS.update(id, this.pedidos).subscribe(
          data => {
            this.successMessage = "redirigiendo...";
            setTimeout(() => {
              this.router.navigate(['/pedidos']);
            }, 2500);
            this.pedidos.estadoPedido = 'Realizado';
          }, err => {
            this.errorMessage = "Error al modificar.";
            setTimeout(() => {
              this.router.navigate(['/pedidos']);
            }, 2500);
          }
        );
      }
    }
