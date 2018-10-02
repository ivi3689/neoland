import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

	valorSeleccionado: string

  constructor() { 
this.valorSeleccionado = 'cinco'
  }

  ngOnInit() {
  }
  handleSelect($event){
  	this.valorSeleccionado = $event.target.value
  }

}
