import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number
  fecha: Date
  numero: number
  persona: any
  porcentaje: number

  promesa: Promise<any>

  constructor(){
    this.precio = 301234.4548238
    this.fecha = new Date()
    this.numero = 2331.99812912
    this.persona = {
      nombre: 'Pedro',
      apellidos: 'García',
      asignaturas: ['Informática', 'EF', 'Diseño']
    }
    this.porcentaje = Math.random()
    this.promesa = this.metodoAsincrono()
  }

  metodoAsincrono(): Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('HOLA MUNDO')
      }, 4000)
    })
  }

}
