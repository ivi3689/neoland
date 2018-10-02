import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleOnSubmit(values){
    console.log(values)
  }
}
