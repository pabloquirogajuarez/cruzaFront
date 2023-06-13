export class Pedidos {
    id?: number;
    numeroPedido: string;
    numeroMesaPedido: string;
    nombreClientePedido: string;
    horarioPedido: string;
    pedido: string;
    observacionesPedido: string;
    estadoPedido: string;
    precioPedido: string;

    constructor(numeroPedido: string, numeroMesaPedido: string, nombreClientePedido: string, horarioPedido: string, pedido: string, observacionesPedido: string, estadoPedido: string, precioPedido: string){
        this.numeroPedido = numeroPedido;
        this.numeroMesaPedido = numeroMesaPedido;
        this.nombreClientePedido = nombreClientePedido;
        this.horarioPedido = horarioPedido;
        this.pedido = pedido;
        this.observacionesPedido = observacionesPedido;
        this.estadoPedido = estadoPedido;
        this.precioPedido = precioPedido;
    }
}