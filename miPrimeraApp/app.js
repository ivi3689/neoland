import {suamr, multiplicar} from './calculadora'
import Persona from './persona'

console.log(multiplicar(4, 35))
console.log(sumar(4, 35))

let pers = new Persona('Ivan', 'del Campo', 29)
console.log(pers.mostrarPersona())