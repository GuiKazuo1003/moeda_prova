import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {

  num: number;

  resp: number;

  Real_Dollar: number;
  Dollar_Real: number;
  Dolar_Real: number;
  convert_Real: number;

  resultadoToReal_Dolar: any;

  Convert(){
    this.resp = this.Dolar_Real * this.convert_Real;
  }
}
