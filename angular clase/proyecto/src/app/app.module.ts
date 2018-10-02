import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PersonaComponent } from './persona/persona.component';
import { ContadorComponent } from './contador/contador.component';
import { SumarComponent } from './sumar/sumar.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PersonaComponent,
    ContadorComponent,
    SumarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
