import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    formulario: FormGroup
  constructor(private servicePost: PostService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('',[ Validators.required, Validators.maxLength(150)]) ,
      autor: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      categoria: new FormControl(''),
      imagen: new FormControl('')
    })

    }
    prueba(){
      this.servicePost.agregarPost(this.formulario)
  }

}
