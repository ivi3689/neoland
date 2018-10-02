import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from  './app.routing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ListaplanetasComponent } from './listaplanetas/listaplanetas.component';
import { DetallePlnetaComponent } from './detalle-plneta/detalle-plneta.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { FormularioComponent } from './formulario/formulario.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListaplanetasComponent,
    DetallePlnetaComponent,
    DetallePersonajeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
