import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculadorModule } from './calculador/calculador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
