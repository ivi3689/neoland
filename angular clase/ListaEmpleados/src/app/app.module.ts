import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import {appRoutes} from './app.routing'
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioComponent,
    ListaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
