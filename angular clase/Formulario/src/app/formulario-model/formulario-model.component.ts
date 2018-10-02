import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';
@Component({
  selector: 'formulario-model',
  templateUrl: './formulario-model.component.html',
  styleUrls: ['./formulario-model.component.css']
})
export class FormularioModelComponent implements OnInit {

  formulario: FormGroup
  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('',
      [Validators.required,
      Validators.minLength(3)]),
      email: new FormControl(''),
      edad: new FormControl('',[
      Validators.required,
      this.validarEdad
    ]),
      direccion: new FormControl('', Validators.required),
      password: new FormControl('', Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/))
   })

    let campoNombre = this.formulario.controls.nombre
    campoNombre.valueChanges.pipe(debounceTime(400)).pipe(distinctUntilChanged()).subscribe((value)=>{
      console.log(value)
    })
  }
  handleOnSubmit(values){
    console.log(this.formulario.value)
  }

  validarEdad(control){
    let edad =control.value
    if(edad >17 && edad < 65){
      //devuelvo null porque la validacion es correcta
      return null
  }else {
    return{mensaje: 'La edad debe estra entre 18 y 65'}
  }
  }
}
