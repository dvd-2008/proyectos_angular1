import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {


  validaPrecio = (event: any) => {

    const reg = /^-?\d*(\.\d{0,3})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }


  resultado: any;
  frutas: any[] = [];
  etiqueta: string = "";
  registrarFruta = (value: any) => {

    this.resultado = value;

    let validate = this.frutas.find((f) => f.nombre.trim() === value.nombre.trim());

    if (validate === undefined || validate.length < 1) {
      this.frutas.push(this.resultado);
    } else {
      this.etiqueta = `${value.nombre} ya se encuentra registrado.`;
    }
  }

}
