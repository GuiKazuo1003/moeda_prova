import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {

  num: number;
  Real_Dollar: number;
  Dollar_Real: number;

  Dolar_Real(){
    this.num = this.Dollar_Real * 5.07;
  }
}
