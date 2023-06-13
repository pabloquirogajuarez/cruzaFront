import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/model/pedidos';
import { PedidosService } from 'src/app/service/pedidos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedidos[] = [];

  constructor(private pedidosS: PedidosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPedidos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPedidos(): void{
    this.pedidosS.lista().subscribe(
      data =>{
        this.pedidos = data;
      }
    )
  }
  
  delete(id?: number){
    if( id != undefined){
      this.pedidosS.delete(id).subscribe(
        data => {
          this.cargarPedidos();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
