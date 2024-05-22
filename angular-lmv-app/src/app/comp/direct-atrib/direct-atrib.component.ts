import { Component } from '@angular/core';
import { fnObj, frutas } from 'src/data';


const { numerosF } = fnObj;

@Component({
  selector: 'app-direct-atrib',
  templateUrl: './direct-atrib.component.html',
  styleUrls: ['./direct-atrib.component.css']
})
export class DirectAtribComponent {

  id:any;

  ngOnInit() {
    this.id=setInterval(()=>{
      this.cambiaEstiloParrafo()
    },1000)

    setTimeout(() => { clearInterval(this.id); this.textoParrafo="Fin del panel se acabo el tiempo"; }, 5000);
  }

  ngOnDestroy(){
    if(this.id){
      clearInterval(this.id)
    }
  }

  frutas: any[] = frutas;
  //directivas atributos ngStyle
  numeros: any[] = numerosF;

  aplicaEstilo = (x: number) => {
    let estilo;
    let estiloPar = { 'color': 'green', 'font-size': '44px' };
    let estiloImpar = { 'color': 'blue', 'font-size': '50px' };

    estilo = (x % 2 === 0 ? estiloPar : estiloImpar);
    return estilo;
  }


  asignaEstiloXVitamina = (vitamina: string) => {
    let estilo;

    switch (vitamina) {
      case "vitamina C": {
        estilo = { 'color': 'orange', 'font-size': '30px' }
        break;
      }
      case "vitamina A": {
        estilo = { 'color': 'green', 'font-size': '30px' }
        break;
      }
      case "vitamina B": {
        estilo = { 'color': 'red', 'font-size': '30px' }
        break;
      }
      case "vitamina K": {
        estilo = { 'color': 'blue', 'font-size': '30px' }
        break;
      }

      default: {
        break;
      }

    }

    return estilo;
  }


  //directiva atributo ngClass
  cambiaEstilo: boolean = false;
  defineEstiloClase = () => {
    let estiloI = 'alert alert-primary p-2 m-2 lead fs-2';
    let estiloF = 'alert alert-danger p-2 m-2 lead fs-4';
    return this.cambiaEstilo ? estiloI : estiloF
  }

  cambiaEstiloParrafo = () => {
    
    this.cambiaEstilo = !this.cambiaEstilo;
  }

  textoParrafo:string="Parrafo que cambia su estilo";

}
