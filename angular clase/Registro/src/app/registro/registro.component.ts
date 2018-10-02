import { Component, OnInit } from '@angular/core';
import {RegistroService} from './../registro.service'
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

formulario:FormGroup
  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.formulario= new FormGroup({
      nombre: new FormControl('nombre'),
      apellidos: new FormControl('apellidos'),
      username: new FormControl('user'),
      pass: new FormControl('pass'),
      passrepeat: new FormControl('passrepeat'),
      mail: new FormControl('mail'),
      adress: new FormControl('adress'),
      edad: new FormControl('edad'),
    });
  }
  handleOnSubmit(values){

    this.registroService.postBuscandoPremio(values).then((response)=>{
      console.log(response.json())
    })
  }

}
