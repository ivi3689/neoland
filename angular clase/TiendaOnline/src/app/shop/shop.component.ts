import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productos: any[]

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getAllProductos()
    .then((response)=>{
      this.productos = response.json()
    })

  }
  handleAddCarrito(value){
    console.log(value)
    this.productosService.postAddCarrito(value).then((response)=>{
      console.log(response.json())
    })
  }

}
