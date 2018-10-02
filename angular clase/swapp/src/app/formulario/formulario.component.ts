
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ SwapiService} from './../swapi.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  constructor(private swapiService: SwapiService) { }

  ngOnInit() {

  }
   handleOnSubmit(values){
     console.log(values)
     this.swapiService.postNumeroAleatorio(values)
     .then((response)=>{
       console.log(response.json())
     })
   }

}
