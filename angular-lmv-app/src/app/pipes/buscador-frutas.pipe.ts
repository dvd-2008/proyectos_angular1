import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorFrutas'
})
export class BuscadorFrutasPipe implements PipeTransform {

  transform(value: any[], busqueda: string): any {

    let resultado:any[]=[];

    if(busqueda===''){
      return value;
    }


    for(const fruta of value){
      if( (fruta.nombre.toLowerCase().indexOf(busqueda.toLowerCase())>-1) || 
          (fruta.tipo.toLowerCase().indexOf(busqueda.toLowerCase())>-1)
      )
      {
        resultado.push(fruta);
      }
    }

    return resultado;
  }

}
