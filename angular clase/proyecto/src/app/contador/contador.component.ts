import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {

	@Input("time")tiempo: number
	numInicial: number

	@Output()onFinished = new EventEmitter()

  constructor() { 

  	this.numInicial = this.tiempo
  }

ngOnInit(){

  console.log(`aparece componete contador con tiempo${this.tiempo}`)
}

  comenzarContador(){

  	this.numInicial = this.tiempo
  	let interval = setInterval(() => {

  		this.numInicial--

  		if(this.numInicial === 0){
  			clearInterval(interval)
  			this.onFinished.emit
  		}
  	}, 1000)
  }
}
