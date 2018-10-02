import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {


titulo: string
@Output() onTodoSent = new EventEmitter() 

  constructor() { }


  ngOnInit(){

  }
  enviarTodo(){

  	this.onTodoSent.emit(this.titulo)
  }
}
