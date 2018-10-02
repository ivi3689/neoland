import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';

  personas: any[]

  constructor(){
  	this.personas =[
  	{
  	nombre: 'Iván',
  	apellidos: 'del Campo',
  	edad: '29',
  	},

  	{
  	nombre: 'Ivan',
  	apellidos: 'Rioja',
  	edad: '26',
  	},

  	{
  	nombre: 'Iban',
  	apellidos: 'Campo',
  	edad: '28',
  	}

  	]
  }

  manejarFinished(){
    alert('Termina el contador')
  }

  recogerResultado($event){
    console.log($event)
  }
}
