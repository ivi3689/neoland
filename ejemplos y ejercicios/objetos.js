class Persona
{

	constructor(pNombre, pApellido, pEdad)
	{
		this.nombre = pNombre
		this.apellido = pApellido
		this.edad = pEdad
	}

	get nombre()
	{
		console.log('entra en get')
		return this._nombre
	}

	set nombre(nuevoNombre)
	{
		console.log('entra en set')
		this._nombre = nuevoNombre
	}


	mostrarPersona()
	{

		return`Hola, me llamo ${this._nombre} ${this._apellido} y mi edad es ${this._edad}`
	}

	static tieneNombre(persona)
	{
		if(persona.nombre) return true
		return false
	}
}

class Adulto extends Persona
{

	constructor(pNombre, pApellido, pEdad, pCoche)
	{
		super(pNombre, pApellido, pEdad)
		this.coche = pCoche
	}
	tieneCoche()
	{
		return this.coche
	}
}

let pers1 = new Persona('Mario', 'Giron', 23)

console.log(pers1.nombre)
console.log(pers1._nombre)
pers1.nombre = 'Ramon'
pers1._nombre = 'Luisa'


//let pers2 = new Persona('Rosa', 'Aguirre', 45)
/*
console.log(pers1)
console.log(pers2.edad)
console.log(pers1.mostrarPersona())
console.log(Persona.tieneNombre(pers1))

let adulto1 = new Adulto('Antonio', 'Martin', 45, true)
console.log( adulto1.nombre)
console.log( adulto1.coche)
console.log( adulto1.mostrarPersona())
console.log(adulto1.tieneCoche() ? 'tiene coche' : 'No tiene coche')*/