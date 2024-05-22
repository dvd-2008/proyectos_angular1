import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {

  titulo = 'Cap3: Angular';
  subtitulo: string = 'Revisando la interpolacion';
  subtitulo_cap: string = 'Revisando directivas Angular';

  //interpolacion:
  n1: number = 20;
  n2: number = 2;
  //interpolacion:
  sueldo: number = 2500;
  tipoCambioSD: number = 0.28; //sol a dolar
  tipoCambioSE: number = 0.25; //sol a euro
  tipoCambioSL: number = 0.22; //sol a libra

  cambiaSolesAMoneda = (cantidad: number, tipoMoneda: number) => {
    let rpta: number = 0;

    switch (tipoMoneda) {
      case 1: {
        rpta = this.cambiaSolesADolares(cantidad);
        break;
      }
      case 2: {
        rpta = this.cambiaSolesAEuro(cantidad);
        break;
      }
      case 3: {
        rpta = this.cambiaSolesALibra(cantidad);

        break;
      }

      default: {
        break;
      }

    }

    return rpta;
  }

  cambiaSolesADolares = (soles: number): any => {
    let resultado = soles * this.tipoCambioSD;
    return resultado.toFixed(2);
  }

  cambiaSolesAEuro = (soles: number): any => {
    let resultado = soles * this.tipoCambioSE;
    return resultado.toFixed(2);
  }

  cambiaSolesALibra = (soles: number): any => {
    let resultado = soles * this.tipoCambioSL;
    return resultado.toFixed(2);
  }

  textD: string = "Sueldo en Dolares";
  textE: string = "Sueldo en Euros";
  textL: string = "Sueldo en Libras"


}
