import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

	colorVerde: boolean
	colorAmbar: boolean
	colorRojo: boolean

  constructor() {
  	this.colorVerde = true
  	this.colorAmbar = false
  	this.colorRojo = false
  }

  ngOnInit() {
  	setInterval (()=> {
  		this.modifyColor()
  	},4000)
  }
  modifyColor(){
  	if(this.colorVerde){
  		this.colorVerde = false
  		this.colorAmbar = true
  		this.colorRojo = false
  	}else if (this.colorAmbar){
  		this.colorVerde = false
  		this.colorAmbar = false
  		this.colorRojo = true	
  	}else if (this.colorAmbar){
  		this.colorVerde = true
  		this.colorAmbar = false
  		this.colorRojo = false	
    }
  }}
