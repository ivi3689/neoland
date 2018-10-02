export class Libro{
  id: number
  titulo: string
  publicado: number
  imagen:string
  escritor: number
  l

  constructor (values){
    this.id = values.id
    this.titulo = values.titulo
    this.publicado =values.publicado
    this.imagen =values.imagen
    this.escritor =values.escritor
  }
}
