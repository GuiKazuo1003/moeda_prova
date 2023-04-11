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

  result: number;

  Real_Dollar: number;
  convert_Real: number;

  Real_Dolar: number;
  convert_Dollar: number;

  Euro_Real: number;
  convert_Euro: number;


  Dolar_Real: number;

  resultadoToReal_Dolar: any;

  Convert(){
    if ((this.Dolar_Real !== 0 && this.convert_Real !== 0) && this.Dolar_Real > 0 && this.convert_Real > 0 ){
      this.result = this.convert_Real / this.Dolar_Real;
    }
    else if (this.Dolar_Real !== 0 && this.Dolar_Real > 0){
      this.result = this.Dolar_Real;
    }
    else if (this.convert_Real !== 0 && this.convert_Real > 0){
      this.result = this.convert_Real;
    }
  }
  Convert2(){
    this.resp2 = this.Dolar_Real / this.convert_Dollar;
    this.resp2 = parseFloat(this.resp.toFixed(2));
  }
  
  
}
