import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

	@Input() titulo
	@Input() productos
	@Output() hacerLista = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  	agregarAPedido(prod){
  	
  	this.hacerLista.emit(prod)

  }

}
