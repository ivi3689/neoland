import{Routes} from '@angular/router';
import{MainComponent} from './main/main.component';
import{CarritoComponent} from './carrito/carrito.component'

export const appRoutes: Routes =[
	{path:'', redirectTo: 'main', pathMatch: 'full'},
	{path:'main', component: MainComponent},
	{path:'carrito', component: CarritoComponent},
	{path:'**', redirectTo: 'main'}
]
