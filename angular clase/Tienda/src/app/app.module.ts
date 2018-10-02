import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{appRoutes} from  './routing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
