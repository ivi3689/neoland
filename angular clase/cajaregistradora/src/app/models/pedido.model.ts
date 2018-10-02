 import {Producto} from './producto.model'
 export class Pedido{

 	productos: Producto[]

 	constructor() {
 		this.productos = []

 	}
 	agregarProducto(prod: Producto){
 		this.productos.push(prod)
 	}

 	precioTotal(){
 		let res = 0
 		this.productos.forEach((producto)=>{
 			res += producto.precio
 		})
 		return res
 	}
 	mostrarPedido(){
 		let res = ""
 		for (let i = 0; i < this.productos.length; ++i) {

 			res +=this.productos[i].nombre + ' '+ this.productos[i].precio + '<br>'
 		}
 		return res
 	}
 }

