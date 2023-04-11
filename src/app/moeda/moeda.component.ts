import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {

  num: number;
  num2: number;

  resp: number;
  resp2: number;

  Real_Dollar: number;
  convert_Real: number;

  Real_Dolar: number;
  convert_Dollar: number;

  Dolar_Real: number;

  resultadoToReal_Dolar: any;

  Convert(){
    this.resp = this.Real_Dollar * this.convert_Real;
    this.resp = parseFloat(this.resp.toFixed(2));
  }
  Convert2(){
    this.resp2 = this.Dolar_Real * this.convert_Dollar;
    this.resp2 = parseFloat(this.resp.toFixed(2));
  }
}
