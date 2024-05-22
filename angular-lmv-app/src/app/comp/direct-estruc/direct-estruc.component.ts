import { Component } from '@angular/core';
import { frutas } from 'src/data';

@Component({
  selector: 'app-direct-estruc',
  templateUrl: './direct-estruc.component.html',
  styleUrls: ['./direct-estruc.component.css']
})
export class DirectEstrucComponent {

  //directivas estructural *ngIf
  tiempoServicio: number = 16;
  edad: number = 9;


  //ngSwitch
  actividad: number = 1;
  btnTextoActividad: string = "Siguiente Actividad";
  muestrabtnActividad: boolean = true;
  muestrabtnClose: boolean = true;

  siguienteActividad = () => {
    this.actividad = (this.actividad === 4 ? 1 : this.actividad + 1);
    this.muestrabtnActividad = (this.actividad === 4 ? false : true);
    this.btnTextoActividad = (this.actividad === 4 ? "Cierre Actividades Diarias" : "Siguiente Actividad");
  }


  cierreActividad = () => {
    this.actividad = 5;
    this.muestrabtnActividad = false;
    this.muestrabtnClose = false;
  }

  //ngFor
  frutas: any[] = frutas;
  frutasDulce: any[] = [];

  getFrutasDulces = () => {
    this.frutasDulce = frutas.filter((f: any) => f.tipo === "dulce");
  }

  constructor() {
    this.getFrutasDulces();
  }


}
