import{ Routes } from '@angular/router'
import{ PrimeroComponent } from './primero/primero.component';
import{ SegundoComponent } from './segundo/segundo.component';
import{SaludoComponent} from './saludo/saludo.component'
import{PrivadoComponent} from './privado/privado.component'
import{RandomGuard} from './guards/random.guard'

export const appRoutes: Routes =[
	{path:'', redirectTo: 'primero', pathMatch: 'full'},
	{path:'primero', component: PrimeroComponent},
	{path:'segundo', component: SegundoComponent},
	{path:'saludo', component: SaludoComponent},
	{path:'saludo/:cadena', component: SaludoComponent},
	{path:'privado', component: PrivadoComponent, canActivate: [RandomGuard]},
	{path:'**', redirectTo: 'primero'}
]