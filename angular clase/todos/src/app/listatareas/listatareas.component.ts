import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {

	@Input() listaTareas 

  constructor() { }

  ngOnInit() {

  }
  tareaTerminada(item){
  	item.completa= true
  }

}
