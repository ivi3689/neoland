import { Injectable } from '@angular/core';
import {PRODUCTOS} from './data/tienda.db';
import{Producto} from './models/producto.model'

@Injectable()
export class CartService {

  constructor() {}

  getAll(): Producto[] {

    return PRODUCTOS
  }

  agregarProducto(producto: Producto){
    PRODUCTOS.push(producto)
  }
}

