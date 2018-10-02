class Profesor
{

	constructor(pNombre, pApellidos, pExperiencia)
	{
		this.nombre = pNombre
		this.apellidos = pApellidos
		this.experiencia = pExperiencia
	}

  	mostrarProfesor() 
  	{
    return `Me llamo ${this.nombre} ${this.apellidos} y tengo ${this.experiencia} años de experiencia`
  	}
}	



class Asignatura
{
	constructor(pNombre,pProfesor)
	{
		this.nombre = pNombre
		this.profesor = pProfesor
	}
	mostrarAsignatura(muestraProfesor)
	{
	console.log(`ASIGNATURA`)	
	}

}

class Estudiante 
{
	constructor(pNombre,pApellidos)
	{
		this.nombre = pNombre
		this.apellidos = pApellidos
		this.asignatura = []
	}
	agregarAsignaturas(pAsignaturas)
	{
		
	}
	agregarEstudiante()
	{
		for (var i = 0; i < Things.length; i++) 
		{
			Things[i]
		}
	}
}

class Universidad
{
	constructor(pNombre)
	{
		this.nombre = pNombre
		this.alumnos = []
	}
	mostrarUniversidad()
	{
		 return `Mi ${this._nombre} ${this._apellidos} y tengo ${this._edad}`
	}
}

//para la clase profesor
let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
console.log(profesor1.mostrarProfesor())
console.log(profesor2.mostrarProfesor())

//para la clase asignatura
let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

console.log(algebra.mostrarAsignatura(false))
console.log(electronica.mostrarAsignatura(true))
console.log(fisica.mostrarAsignatura(true))