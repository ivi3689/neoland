import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { EstructuralesComponent } from './estructurales/estructurales.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SelectorComponent } from './selector/selector.component';
import { ColorDirective } from './color.directive';
import { BlinkDirective } from './blink.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    EstructuralesComponent,
    BuclesComponent,
    SelectorComponent,
    ColorDirective,
    BlinkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
