import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Empleado} from '../models/empleado.model'
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: []
})
export class ListaComponent implements OnInit {

	arrayLista: Empleado[]
	@Output()pasarLista = new EventEmitter

  constructor(private empleadosService: EmpleadosService) {

  	//this.pasarLista.emit(Empleado)no va aqui
  }

  ngOnInit() {
    this.arrayLista = this.empleadosService.getAll()
  }

}
