import { Component, Input} from '@angular/core';

@Component({
  selector: 'todolist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  tareas: any[]

  constructor () {
  	this.tareas = ["Estudiar", "Repasar", "Hacer ejercicios"]
  }

  handleOnTodoSent($event){

    this.tareas.push($event)
  	
  }
}
