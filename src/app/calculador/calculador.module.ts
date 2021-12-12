import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CalcularModule } from './main/calcular/calcular/calcular.module';
import { MostrarModule } from './main/resultado/mostrar/mostrar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MostrarModule,
    CalcularModule,
    FormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class CalculadorModule { }
