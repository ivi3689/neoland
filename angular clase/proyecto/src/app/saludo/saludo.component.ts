import { Component } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent  {

	saludo: string
	claseParrafo: string

  constructor() { 

  	this.saludo = 'Que pasa'
  	this.claseParrafo = 'parrafo'
  }

  segundoSaludo(): string{
  	return'segundo saludo'
  }

  manejarClick($event) {
    console.log('He pulsado!!')
    console.log($event.screenX)
    this.claseParrafo = 'nuevoParrafo'


  }

}
