import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

    tabla: any 

  constructor() {
    this.tabla = []
  }
  ngOnInit() {
  }
  aumentarTabla(){
    if(this.tabla.length=0){
      this.tabla.pull('fila')
    }
  }
  nuevaTabla(){
    this.tabla = [0]
  }

}
