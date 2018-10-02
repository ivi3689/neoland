import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import{Escritor} from '../models/escritor.model'

@Component({
  selector: 'app-escritor-detalle',
  templateUrl: './escritor-detalle.component.html',
  styleUrls: ['./escritor-detalle.component.css'],
  providers: [EscritoresService]
})
export class EscritorDetalleComponent implements OnInit {

  escDetalle: Escritor

  constructor(private activatedRoute: ActivatedRoute, private escritoresService: EscritoresService) { }

  ngOnInit() {
    //asi obtengo los parametros variables de la ruta activa
    this.activatedRoute.params.subscribe((params)=>{
     this.escritoresService.getEscritorById(params.id)
     .then((escritor) => {
        this.escDetalle = escritor
     })
    })
  }

}
