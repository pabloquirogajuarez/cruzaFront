export class Ingresos {
    id?: number;
    fechaIngreso: string;
    gananciaIngreso: string;

    constructor(fechaIngreso: string, gananciaIngreso: string){
        this.fechaIngreso = fechaIngreso;
        this.gananciaIngreso = gananciaIngreso;
    }
}
