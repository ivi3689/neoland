import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    
  }
  handleOnSubmit(values){
    console.log(values)
    this.registroService.postContinuarBuscandoPremio(values).then((response)=>{
      console.log(response.json())
    })
  }

}
