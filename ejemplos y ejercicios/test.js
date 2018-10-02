/*const NOMBRE ='Mario'

//NOMBRE ='Antonio'

const PI = 3.14

console.log(NOMBRE)

let saludo= 'Hola me llamo' + NOMBRE
let saludo_tpl = `Hola me llamo  ${NOMBRE}.
 ¡Saludos! ${5*4} 
 ${PI}
 ${hola mundo}`
//console.log(saludo_tpl)

function prueba(){
	let x = 32
	if (true){
		let y = 21
		console.log(x)
		console.log(y)
		y = 56
	}	
		console.log(x)
		console.log(y)

} */

//prueba()


function mayus(string, ...values){
	console.log(string)
	console.log(values)
	return string[0].toUpperCase()
}

let x = 5
let y = 7
console.log(mayus`La suma de x e y es ${x+y}`)