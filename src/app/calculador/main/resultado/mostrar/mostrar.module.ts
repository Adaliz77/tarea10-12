import { CommonModule } from "@angular/common";
import { EventEmitter, Input, NgModule, Output } from "@angular/core";
import { MostrarComponent } from "./mostrar.component";

@NgModule({
  declarations: [
    MostrarComponent
  ],
  exports: [
    MostrarComponent
  ],
  imports: [
    CommonModule
  ]

})
export class MostrarModule{

}
