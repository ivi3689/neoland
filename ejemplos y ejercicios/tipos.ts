let termina : boolean  = true

console.log(termina)

let numEntero: number = 23
let numDecimal: number = 19.45
let numHex: number = 0xff00d
let numBin: number = 0b10101

console.log(numHex)

let nombre: string = `pepe`
let cadena: string = `Hola me llamo`

console.log(cadena)

let numList: number[] = [1, 23, 56, 98, 85]
let cadenasList: Array<string> = ['uno', 'tres', 'dos', 'cinco']

enum Size {Small, Big, Medium }

console.log(Size.Small)

let dato: any ='estos son los datos'

dato = true
dato = 23
dato = [1, 2, 3, 4]

function saludo(): string {
	return'hola mundo'
}

saludo()


function saludo_v2(): void{
	console.log('hola mundo')
}