 export default class Universidad{
    constructor(nombre){
        this.nombre = nombre
        this.alumnos = []
    }
    agregarAlumno(estudiante){
        this.alumnos.push(estudiante)
    }
    obtenerAlumnosAsignatura(nombreAsignatura){
        let count = 0
        for(let i = 0; i<this.alumnos.length; i++){
            for(let j = 0; j<this.alumnos[i].asignaturas.length; j++){
                if(this.alumnos[i].asignaturas[j].nombre === nombreAsignatura){
                    count++
                }
            }
        }
        return count
    }
    mostrarUniversidad(){
        console.log(`UNIVERSIDAD(nombre: ${this.nombre})`)
        for(let i = 0; i<this.alumnos.length; i++){
            this.alumnos[i].mostrarEstudiante()
        }
    }
}