import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambioColor', [
      state('verde', style({
        'background-color': 'green',
        'width': '300px'
      })),
      state('azul', style({
        'background-color': 'blue',
        'width': '10px'
      })),
      //transition('verde => azul', animate(1000)),
      transition('void => *',  animate('3s')),
      transition('azul <=> verde', animate('2s ease-in'))
    ]),
    trigger('entraYSale', [
      state('out', style({transform: 'translateX(-100%)'})),
      state('in', style({transform: 'translateX(100%)'})),
      transition('* <=> *', animate(2000))
    ])
  ]
})
export class AppComponent {

  estadoTrigger: string
  cortinilla: string

  constructor(){
    this.estadoTrigger = 'verde'
    this.cortinilla = 'out'
  }
  modificarEstado(){
    this.estadoTrigger = (this.estadoTrigger === 'verde') ? 'azul':'verde'
  }
  entradaYSalida(){
    this.cortinilla = (this.cortinilla === 'out') ? 'in':'out'
  }
}
