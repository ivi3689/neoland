import { ListaplanetasComponent } from './listaplanetas/listaplanetas.component';
import { Routes } from '@angular/router'
import { DetallePlnetaComponent } from './detalle-plneta/detalle-plneta.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import{FormularioComponent} from './formulario/formulario.component'

export const appRoutes: Routes = [
  { path: '', component: ListaplanetasComponent, pathMatch: 'full' },
  { path: 'planeta/:url', component: DetallePlnetaComponent},
  { path: 'residents/:url', component: DetallePersonajeComponent},
  { path: 'formulario', component:FormularioComponent}

]
