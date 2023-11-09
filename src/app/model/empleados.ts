export class Empleados {
    id?: number;
    nombreEmpleado: string;
    rolEmpleado: string;

    constructor(nombreEmpleado: string, rolEmpleado: string){
        this.nombreEmpleado = nombreEmpleado;
        this.rolEmpleado = rolEmpleado;
    }
}
