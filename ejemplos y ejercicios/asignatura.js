export default class Asignatura{
    constructor(nombre, profesor){
        this.nombre = nombre
        this.profesor = profesor
    }

    mostrarAsignatura(muestraProfesor){
        console.log(`ASIGNATURA (nombre: ${this.nombre})`)
        if(muestraProfesor){
            console.log('Asignatura impartida por:')
            this.profesor.mostrarProfesor()            
        } 
    }
}