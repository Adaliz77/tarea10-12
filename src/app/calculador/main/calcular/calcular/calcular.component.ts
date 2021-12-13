import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent  {

  operandoA: number=0;
  operandoB:number=0;
  res:number=0;

  @Output()
  resultado: EventEmitter<number> = new EventEmitter();

  onSuma(){
    this.res = this.operandoA + this.operandoB;
    this.resultado.emit(this.res);
  }

  onResta(){
    this.res = this.operandoA - this.operandoB;
    this.resultado.emit(this.res);
  }

  onMulti(){
    this.res = this.operandoA * this.operandoB;
    this.resultado.emit(this.res);
  }

  onDivi(){
    this.res = this.operandoA / this.operandoB;
    this.resultado.emit(this.res);
  }

  reset() {
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultado.emit(0);
  }


}
