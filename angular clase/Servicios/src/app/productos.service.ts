import { Injectable } from '@angular/core';
import { PRODUCTOS } from './data/producto.db';
import {Producto} from './models/producto.model';


@Injectable()
export class ProductosService {

	constructor() { }

	getAll(): Producto[]{
		console.log(PRODUCTOS)
		return PRODUCTOS
	}

	getProductosByDepartamento(pDepartamento): Producto []{
		return PRODUCTOS.filter((item) => {
			return item.departamento === pDepartamento
		})
	}

	sortProductosByPrecio(asc): Producto[] {
		if(asc){
			return PRODUCTOS.sort((a, b) => {
				return a.precio > b.precio ? 1 : -1
			})
		}else{
			{
				return PRODUCTOS.sort((a, b) => {
					return a.precio > b.precio ? 1 : -1
				})
			}

		}
	}
}
