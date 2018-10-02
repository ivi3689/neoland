import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  detallePersonaje: any

  constructor(private activatedRoute: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) =>{
      this.swapiService.getPlanetFormUrl(params.url)
      .then((response) =>{
        this.detallePersonaje = response.json()
        console.log(this.detallePersonaje)
      })

    })
  }


}
