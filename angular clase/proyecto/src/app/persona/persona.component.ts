import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

	@Input()nombre: string
	@Input()apellidos: string
	@Input()edad: number

  constructor() {

  	this.nombre = 'Iván'
  	this.apellidos = 'del Campo'
  	this.edad = 29
   }
}
