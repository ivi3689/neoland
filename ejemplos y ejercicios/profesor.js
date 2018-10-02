export default class Profesor{
    constructor(nombre, apellidos, experiencia){
        this.nombre = nombre
        this.apellidos = apellidos
        this.experiencia = experiencia
    }

    mostrarProfesor(){
        console.log(`PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia})`)
    }
}