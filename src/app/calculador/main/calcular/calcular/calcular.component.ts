import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent  implements OnInit{

  operandoA: number=0;
  operandoB:number=0;

  @Output()
  resultado: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSuma(){
    let res = this.operandoA + this.operandoB;
    this.resultado.emit(res);
  }

  onResta(){
    let res = this.operandoA - this.operandoB;
    return this.resultado.emit(res);
  }

  onMulti(){
    let res = this.operandoA * this.operandoB;
    return this.resultado.emit(res);
  }

  onDivi(){
    let res = this.operandoA / this.operandoB;
    return this.resultado.emit(res);
  }


}
