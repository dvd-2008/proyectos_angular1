import { Component } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent {

  parrafo:string="Revisando pipe de angular";
  titulo:string="CIEN AÑOS DE SOLEDAD";
  IGV:number=0.18;
  IMP_RENTA5:number=0.13;

  precio:number=12349999.45611141;
  ahorro:number=1287367647.4394123;
  fecha:Date=new Date();

  nroVistaInvalido:number=-20;
  nroVistaIniciando:number=40;
  nroVistaCiertaAudiencia:number=1000;
  nroVistaPromedio:number=50000;
  nroVistaGranInfluencer:number=500000;
}
