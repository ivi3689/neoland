import { REGISTRO_STEP1 } from "./actions";
import {tassign} from 'tassign'

export interface IAppState {

  registro: any
}

export const INITIAL_STATE: IAppState = {
  registro: {}
}

export function rootReduce(state, action) {
  switch (action.type) {
    case REGISTRO_STEP1: {
      let objReg = Object.assign({}, state.registro, action.data)
      console.log(action.data)
      return tassign(state, {registro: objReg})
    }
  }

  return state
}

