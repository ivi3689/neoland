import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent implements OnInit {

	muestraParrafo: boolean
	@ViewChild('campoTexto') txt: any

  constructor() { 
  	this.muestraParrafo = true 
  }

  ngOnInit() {
  	
  }
  mostrarOcultar(){
  	this.muestraParrafo = !this.muestraParrafo
  }

}
