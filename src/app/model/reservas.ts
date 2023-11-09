export class Reservas {
    id?: number;
    numeroReserva: string;
    nombreClienteReserva: string;
    telefonoReserva: string;
    fechaReserva: string;
    horaReserva: string;
    numeroPersonasReserva: string;
    eventoReserva: string;
    observacionesReserva: string;

    constructor(numeroReserva: string, nombreClienteReserva: string, telefonoReserva: string, fechaReserva: string, horaReserva: string, numeroPersonasReserva: string, eventoReserva: string, observacionesReserva: string){
        this.numeroReserva = numeroReserva;
        this.nombreClienteReserva = nombreClienteReserva;
        this.telefonoReserva = telefonoReserva;
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.numeroPersonasReserva = numeroPersonasReserva;
        this.eventoReserva = eventoReserva;
        this.observacionesReserva = observacionesReserva;
    }
}