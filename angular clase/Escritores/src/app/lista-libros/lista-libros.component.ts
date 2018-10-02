import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  providers: [LibrosService]
})
export class ListaLibrosComponent implements OnInit {
    //mediante el objeto  Activatedroute recuperamos los parametros de la url activa

    //arrLibros: Libro[] decomentar par que funcione
  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(( params)=> {
      this.librosService.getLibrosByEscritor(params.id)
      .then((arrLibros) =>{
       // this.arrLibros = arrLibros descomentar para que funcione

      })
    })
  }

}
