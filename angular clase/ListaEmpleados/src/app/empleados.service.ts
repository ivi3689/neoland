import { Injectable } from '@angular/core';
import { TRABAJADORES } from './data/empleado.db';
import { Empleado } from './models/empleado.model'

@Injectable()
export class EmpleadosService {

  constructor() { }

  getAll(): Empleado[] {
    console.log(TRABAJADORES)
    return TRABAJADORES
  }

  agregarEmpleado(empleado: Empleado) {
    TRABAJADORES.push(empleado)

  }
}
