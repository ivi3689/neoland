import{Routes} from '@angular/router';
import{BlogComponent} from './blog/blog.component';
import{FormularioComponent} from './formulario/formulario.component';

export const appRoutes: Routes =[
	{path:'', redirectTo: 'formulario', pathMatch: 'full'},
	{path:'blog', component: BlogComponent},
	{path:'formulario', component: FormularioComponent},
	{path:'**', component: BlogComponent}
]
