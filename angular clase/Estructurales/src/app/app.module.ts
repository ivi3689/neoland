import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
