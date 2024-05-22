import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vistas'
})
export class VistasPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let respuesta;

    if(value<0){
      respuesta="Nro de vistas invalido (no puede ser negativo)";
    }
    else if(value>=0 && value<50){
      respuesta=`Ud se esta iniciando como influencer tiene: ${value} vistas`
    }
    else if(value>=50 && value<2000){
      respuesta=`Ud tiene cierta audiencia como influencer tiene: ${value} vistas`
    }
    else if(value>=2000 && value<100000){
      respuesta=`Ud es un influencer promedio tiene: ${value} vistas`
    }
    else{
      respuesta=`Ud es un gran influencer tiene: ${value} vistas`
    }

    return respuesta;
  }

}
