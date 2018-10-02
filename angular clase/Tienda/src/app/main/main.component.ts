import { Component, OnInit } from '@angular/core';
import{Producto} from '../models/producto.model'
import{Router} from '@angular/router'
import { CartService } from '../cart.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrProductos: Producto[]

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.arrProductos = this.cartService.getAll()
  }

}

