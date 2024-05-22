import { Component } from '@angular/core';
import { frutas } from 'src/data';

@Component({
  selector: 'app-tienda-frutas',
  templateUrl: './tienda-frutas.component.html',
  styleUrls: ['./tienda-frutas.component.css']
})
export class TiendaFrutasComponent {

  frutas=frutas;
  consulta:string='';
    
}
