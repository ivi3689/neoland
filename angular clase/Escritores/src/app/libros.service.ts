import { Injectable } from '@angular/core';
import{LIBROS} from './data/libros.db';
import{Libro} from './models/libros.model';

@Injectable()
export class LibrosService {

  constructor() { }

  getLibrosByEscritor(escritorId): Promise<Libro[]>{
    let prom: Promise<Libro[]> = new Promise((resolve, reject) =>{
      let arrLibros = LIBROS.filter((item) => {
        return item.escritor == escritorId
      })
      //resolve(arrLibros) descometar para que funcione
    })
    return prom
  }
}
