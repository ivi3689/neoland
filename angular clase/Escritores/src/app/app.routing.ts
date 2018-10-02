import { Routes} from '@angular/router';
import{ListaEscritoresComponent} from './lista-escritores/lista-escritores.component';
import{EscritorDetalleComponent} from './escritor-detalle/escritor-detalle.component';
import{ListaLibrosComponent} from './lista-libros/lista-libros.component'
export const appRoutes: Routes = [
  {path: '', pathMatch:'full', component: ListaEscritoresComponent},
  {
    path: 'escritor/:id',  component: EscritorDetalleComponent,
    children:[
     {path: 'libros',  component: ListaLibrosComponent,}

    ]
  }

]
