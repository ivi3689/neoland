import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent {

	@Input() operador1: string 
 	@Input() operador2: string

 	@Output() result = new EventEmitter()


  constructor() { }

  sumar(){
  		let res = (this.operador1) + (this.operador2)
  		this.result.emit(res)
  	}

}
