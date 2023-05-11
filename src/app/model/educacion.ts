export class Educacion {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaInicioE : string;
    fechaFinE : string;

    constructor(nombreE: string, descripcionE: string, fechaInicioE: string, fechaFinE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
    }
}