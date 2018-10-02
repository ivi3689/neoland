import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { ContarComponent } from './contar/contar.component';
import { InfoComponent } from './info/info.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContarComponent,
    InfoComponent,
    FiltrosComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, NgReduxModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    //creamos este objeto para engranchar el redux de nuestra aaplicacion con la extension del navegador
      let enhancer = isDevMode() ? [devTools.enhancer()] : []
      //el primer parametro  de la configuracion es el reducer
      //el segundo el estado inicial
      //el tercero son Middlewares
      //el cuarto la asociacion con el navegador
     ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer)

  }
}
