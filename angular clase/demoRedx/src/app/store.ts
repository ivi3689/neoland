import { INCREMENTAR } from "./actions";
import { DECREMENTAR} from "./actions";
import{tassign} from 'tassign'
import {MODIFICAR_FILTROS} from './actions'
//este interfaz define la estructura de datos de nuestra  store
//cuales son sus nombres y que tipo tienen
export interface IAppState{
  counter: number
  mensaje: string
  busqueda:string
  barrio: number
  distancia:number
}

export const INITIAL_STATE: IAppState ={
  counter: 0,
  mensaje: "Mensaje inicial",
  busqueda: '',
  barrio: 0,
  distancia:0
}

  //devuleve un nuevo estado para nuestra store
export function rootReducer(state: IAppState, action): IAppState  {
  switch(action.type){
    case INCREMENTAR:{
      // return{counter: state.counter + 1,mensaje: state.mensaje }
      return Object.assign({}, state, {counter: state.counter +1})
    }
    case DECREMENTAR:{
      // return{counter: state.counter -1, mensaje: state.mensaje}
      return tassign(state, {counter: state.counter -1})
    }
    case MODIFICAR_FILTROS: {
      return tassign(state, {})
    }
  }
  return state
}
