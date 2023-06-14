import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/model/pedidos';
import { PedidosService } from 'src/app/service/pedidos.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {
  numeroPedido: string;
  numeroMesaPedido: string;
  nombreClientePedido: string;
  horarioPedido: string;
  pedido: string;
  observacionesPedido: string;
  estadoPedido: string;
  precioPedido: string;

  //alerts
  successMessage: string;
  errorMessage: string;

  constructor(private pedidosS: PedidosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pedidos = new Pedidos(this.numeroPedido, this.numeroMesaPedido, this.nombreClientePedido, this.horarioPedido, this.pedido, this.observacionesPedido, this.estadoPedido, this.precioPedido);
    this.pedidosS.save(pedidos).subscribe(
      data =>{
        this.successMessage = "Añadiste un nuevo pedido, redirigiendo...";
        setTimeout(() => {
          this.router.navigate(['/pedidos']);
        }, 2500);
      }, err =>{
        this.errorMessage = "Error al añadir el pedido.";
      }
    )
  }

}
