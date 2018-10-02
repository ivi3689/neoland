import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REGISTRO_STEP1 } from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  formulario: FormGroup
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {

  }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      telefono: new FormControl('',[
        Validators.required,
        Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/)
      ]),
      nif: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i)
      ]),
      password: new FormControl('', Validators.required)
    })
  }
  enviarStep1(){
    console.log(this.formulario.value)
    this.ngRedux.dispatch({
      type: REGISTRO_STEP1,
      data: this.formulario.value
    })
    this.router.navigate(["/registro","step2"])
  }

}
