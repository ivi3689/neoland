import{Producto} from '../models/producto.model'


export class Carrito{

  productos: Producto[]

  constructor(){
    this.productos = []
  }

  agregarProducto(prod: Producto ){
    this.productos.push(prod)
  }


  precioTotal(){
    let res = 0
    this.productos.forEach((producto)=>{
      res += producto.precio
    })
    return res
  }
  //precioTotal(){
    //let res = ""
    //for(let i = 0; i<this.carrito.length; i++){
        //res = this.carrrito[i].nombre +' '+ this.carrito[i].precio
    //}
   // return res
  //}

}
