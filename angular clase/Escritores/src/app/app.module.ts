import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import{appRoutes} from './app.routing';
import { EscritorDetalleComponent } from './escritor-detalle/escritor-detalle.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscritoresComponent,
    EscritorDetalleComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
