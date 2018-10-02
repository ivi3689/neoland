import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegistroComponent} from './registro/registro.component';
import {LoginComponent} from './login/login.component';


export const appRoutes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'registro', component: RegistroComponent},
{path: 'login', component: LoginComponent}
]
