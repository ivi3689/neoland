import { Component, OnInit } from '@angular/core';
import { MODIFICAR_FILTROS } from '../actions';
import {NgRedux} from '@angular-redux/store'
import {IAppState} from '/'

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit(values){
    console.log(values)
    this.ngRedux.dispatch({
      type: MODIFICAR_FILTROS,
      data: {
        busqueda: values.inputBusqueda,
        barrio: values.selectBarrio,
        ditancia: values.radioDistancia
      }
    })
  }

}
