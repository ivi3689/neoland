import{ Routes } from '@angular/router'
import{ FormularioComponent  } from './formulario/formulario.component';
import{ ListaComponent } from './lista/lista.component';
import{MainComponent} from './main/main.component'

export  const appRoutes: Routes =[
	{path:'', component: MainComponent, pathMatch: 'full'},
	//{path: 'main', component: MainComponent},
	//{path: 'lista', component: ListaComponent},
	//{path: 'formulario', component: FormularioComponent}
	{path:'**', redirectTo: ''}
]