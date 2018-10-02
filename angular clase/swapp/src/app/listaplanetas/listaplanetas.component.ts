import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-listaplanetas',
  templateUrl: './listaplanetas.component.html',
  styleUrls: ['./listaplanetas.component.css']
})
export class ListaplanetasComponent implements OnInit {

  planetas: any[]
  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getAllplanets()
    .then((response)=>{
      this.planetas = response.json().results
      localStorage.setItem('planetas', JSON.stringify(this.planetas))
    })
  }

}
