import { Component } from '@angular/core';
import { ProductosService } from './productos.service';
import {Producto} from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductosService]
})
export class AppComponent {

	prods: Producto[]

	constructor (private productosService: ProductosService){}

  	ngOnInit(){
  		console.log("ENTRA")
  		this.prods = this.productosService.getAll()
  		console.log(this.prods)
  	}
  	selectDepartamento(dept){

  		this.prods = this.productosService.getProductosByDepartamento(dept)
  	}
  	ordenarProductos(orden){
  		this.prods = this.productosService.sortProductosByPrecio(orden)
  	}
}
