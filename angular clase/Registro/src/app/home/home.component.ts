import { Component, OnInit } from '@angular/core';
import{ RegistroService} from './../registro.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private registroService: RegistroService) { }

  ngOnInit() {}

  handleBoton(){
    this.registroService.getPremio()
    .then((response) =>{
      console.log(response.json())
    })
  }
}
