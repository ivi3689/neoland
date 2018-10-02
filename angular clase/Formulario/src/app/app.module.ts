import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioTemplateComponent } from './formulario-template/formulario-template.component';
import { FormularioModelComponent } from './formulario-model/formulario-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTemplateComponent,
    FormularioModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
