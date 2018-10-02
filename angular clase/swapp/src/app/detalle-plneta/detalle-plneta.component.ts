import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-detalle-plneta',
  templateUrl: './detalle-plneta.component.html',
  styleUrls: ['./detalle-plneta.component.css']
})
export class DetallePlnetaComponent implements OnInit {

  detallePlaneta: any
  personajes: any[]


  constructor(private activatedRoute: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit() {
      console.log(localStorage.getItem('nombrePlaneta'))
      console.log((localStorage.getItem('Planetas')))
    this.activatedRoute.params.subscribe((params) =>{
      this.swapiService.getPlanetFormUrl(params.url)
      .then((response) =>{
        this.detallePlaneta = response.json()
        console.log(this.detallePlaneta)
      })

    })
  }


}
