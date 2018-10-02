import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css'],
  providers: [EscritoresService]
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[]
  constructor(private escritoresService: EscritoresService, private Router: Router) { }

  ngOnInit() {

    this.escritoresService.getAll()
    .then((escritores)=>{
       this.arrEscritores = escritores;
    });
  }

  navegarADetalle(esc){
      // /escritor/5
    this.Router.navigate(['/escritor', esc.id, 'libros'])

  }
}
