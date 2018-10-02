export class Post{

    titulo: string
    texto: string
    imagen: string
    autor: string
    fecha: string
    categoria: string



    constructor(pTitulo, pTexto, pAutor, pFecha, pCategoria, pImagen){

      this.titulo = pTitulo
      this.texto = pTexto
      this.autor = pAutor
      this.fecha = pFecha
      this.categoria = pCategoria
      this.imagen = pImagen
    }
  }
