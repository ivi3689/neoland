import { Injectable } from '@angular/core';
import{ESCRITORES} from './data/escritores.db';
import{Escritor} from './models/escritor.model';


@Injectable()
export class EscritoresService {

  getAll(): Promise<Escritor[]> {

    let prom: Promise<Escritor[]> = new Promise ((resolve, reject) => {
      resolve(ESCRITORES)
    })
    return prom
  }

  getEscritorById(id): Promise<Escritor>{
    let prom: Promise<Escritor> = new Promise((resolve, reject) =>{
       let arrFiltrado = ESCRITORES.filter((item) => {
        return item.id == id
      })
      //lo que le paso al resolve es lo mismo que recibo en el parametro then
      resolve(arrFiltrado[0])
    })
    return prom
  }
}
