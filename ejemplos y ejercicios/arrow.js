function sumar(x, y) 
{
	return x+y
}

let sumar_v2 = function (x, y) //funcion anonima
{
	return x + y
}

// function contador(done)
// {
// 		let cont = 0

// 	let interval = setInterval(function()
// 	{
// 		console.log(cont)
// 		cont++

// 		if( cont === 10)
// 		 {
// 			clearInterval(interval)
// 			done()
// 		}
			
// 	}, 1000)
// }

// console.log(sumar(3, 98))
// console.log(sumar_v2 (5,1))

// setTimeout(function()
// {
// 	console.log('han pasado 3 segundos')
// }, 3000)

// contador(function()
// {
// 	console.log('ha terminado')
// })

let sumar_v3 = (x, y) => x+y

console.log(sumar_v3(3,6))

let dividirCadena = cadena => cadena.split(' ')

console.log(dividirCadena('la cadena es esta'))

setTimeout(() =>console.log('terminan los 3 segundos'), 3000)


let arr = [1, 2, 5, 7, 4, 29]

let dobles = arr.map(num => num*2)
console.log(dobles)

let pares = arr.filter(num => num%2 === 0)
console.log(pares)


arr.forEach( num =>console.log(num))