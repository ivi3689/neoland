import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REGISTRO_STEP1 } from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  formulario: FormGroup
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      calle: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      piso: new FormControl('', Validators.required),
      letra: new FormControl('',Validators.required),
      zip: new FormControl('',Validators.required)
    })
  }
  enviarStep2(){
    console.log(this.formulario.value)
    this.ngRedux.dispatch({
      type: REGISTRO_STEP1,
      data: this.formulario.value
    })
    this.router.navigate(["/registro","step3"])
  }

}
