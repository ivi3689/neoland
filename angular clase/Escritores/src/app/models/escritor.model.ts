import{Libro} from './libros.model';

export class Escritor {
  id: number
  nombre: string
  apellidos: string
  imagen:string
  pais: string
  libros: Libro[]

  constructor (values){
    this.id = values.id
    this.nombre = values.nombre
    this.apellidos =values.apellidos
    this.imagen =values.imagen
    this.pais =values.pais
    this.libros =values.libros

  }
}
