import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input('todos') tareas: any[]

  constructor() { }

  ngOnInit() {
  }

  pedidoAString (){
  	this.tareas.join('<br>')
  }
    
}
