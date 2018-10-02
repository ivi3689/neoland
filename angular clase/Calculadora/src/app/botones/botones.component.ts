import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-botones',
	templateUrl: './botones.component.html',
	styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {


	resultado: string 

	constructor(){ 
		this.resultado= ""
	}


	ngOnInit() {
	}

	pulsarBoton(numero){

		this.resultado += `${numero}`
	}

	resultadoTotal(){
		this.resultado = eval(this.resultado)
	}

}
