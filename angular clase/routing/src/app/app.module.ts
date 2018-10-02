import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from  './app.routing';
import {RandomGuard} from './guards/random.guard'
import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PrivadoComponent } from './privado/privado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    SaludoComponent,
    PrivadoComponent

  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes
      )
  ],
  providers: [RandomGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
