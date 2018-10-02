import { Component, OnInit } from '@angular/core';
import{ Empleado} from '../models/empleado.model';
import{ Router} from '@angular/router'
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	arrayMain: Empleado []

  constructor(private router: Router) {

  	this.arrayMain = []
  }

  ngOnInit() {
  }
  handlePasarEmpleado($event){

  this.arrayMain.push($event)
  console.log(this.arrayMain)
  }

}
