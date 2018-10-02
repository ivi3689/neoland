import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
