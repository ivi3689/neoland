import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { INCREMENTAR, DECREMENTAR } from '../actions';

@Component({
  selector: 'app-contar',
  templateUrl: './contar.component.html',
  styleUrls: ['./contar.component.css']
})
export class ContarComponent implements OnInit {

  @select() counter: number

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.subscribe(()=>{
      console.log(this.ngRedux.getState())
      //this.counter = this.ngRedux.getState().counter
    })
  }

  incrementar(){
    this.ngRedux.dispatch({type: INCREMENTAR })
  }
  decrementar(){
    this.ngRedux.dispatch({type: DECREMENTAR })
  }
  ngOnInit() {
  }

}
