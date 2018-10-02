 export default class Estudiante{
    constructor(nombre, apellidos){
        this.nombre = nombre
        this.apellidos = apellidos
        this.asignaturas = []
    }
    agregarAsignatura(asignatura){
        this.asignaturas.push(asignatura)
    }
    mostrarEstudiante(){
        console.log(`ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})`)
        console.log('Estas son las asignaturas que cursa:')
        for (let i = 0; i<this.asignaturas.length; i++){
            this.asignaturas[i].mostrarAsignatura(true)
        }
    }
}