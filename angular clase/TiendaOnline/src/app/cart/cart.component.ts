  import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productos: any[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {//comprobamos que esta creado cartId, sino esta creado se crea abajo
    if (localStorage.getItem('cartId')) {
      this.productosService.getRecuperarCarrito().then((response) => {
        this.productos = response.json()
      })
    } else {//desde productos service  llamo a postcrearcarrito
      this.productosService.postCrearCarrito()
        .then((response) => {
          localStorage.setItem('cartId', response.json().token_cart)
          console.log(response.json().token_cart)
        })
    }
  }
}
