import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  resultado:number = 0;

 mostrarResultado(resultado:number){
  console.log('Muestro el resultado desde el componente hijo: ' + resultado);
  this.resultado=resultado;
}


}
