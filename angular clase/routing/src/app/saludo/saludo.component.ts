import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

	mensaje: string

  constructor(private activatedRoute: ActivatedRoute) { 
  	this.mensaje = 'Saludo por defecto'

  	this.activatedRoute.params.subscribe((params) => {
  		this.mensaje= params.cadena

  	})
  }

  ngOnInit() {
  }

}
