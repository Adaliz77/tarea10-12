import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalcularComponent } from "./calcular.component";

@NgModule({
  declarations: [
    CalcularComponent
  ],
  exports: [
    CalcularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})
export class CalcularModule{}
