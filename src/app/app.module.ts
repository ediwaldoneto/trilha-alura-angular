import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppNovaTransferenciaComponent } from './app-nova-transferencia/app-nova-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNovaTransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
