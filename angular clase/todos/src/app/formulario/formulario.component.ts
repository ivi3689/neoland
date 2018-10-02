import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Tarea} from '../models/tarea.model';
@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() mandarTarea = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  crearTarea(pMensaje){
  	let tarea = new Tarea(pMensaje)
  	this.mandarTarea.emit(tarea)
  }


}
