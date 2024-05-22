import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  frutaForm=new FormGroup({
    nombre:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    precio:new FormControl('',[Validators.required, Validators.pattern(/^-?\d*(\.\d{0,3})?$/)]),
    propiedad:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)])    

  })

  resultado:any;
  frutas:any[]=[];

  registrar=()=>{
    this.resultado=this.frutaForm.value;
    this.frutas.push(this.resultado);
  }


}
