import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iempleado } from 'src/app/modelo/Iempleado';
import { empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-gestor-empleado',
  templateUrl: './gestor-empleado.component.html',
  styleUrls: ['./gestor-empleado.component.css']
})
export class GestorEmpleadoComponent {

  empleados:Iempleado[]=[];
  empObj:empleado=new empleado();

  muestraBtnR:boolean=true;
  muestraBtnA:boolean=false;

  formEmpleado=new FormGroup({
    nombres:new FormControl(),
    apellidos:new FormControl(),
    edad:new FormControl(),
    cargo:new FormControl()
  })


  constructor(private empleadoService: EmpleadoService){}

  listar=()=>{
    this.empleadoService.getEmpleados().subscribe((resp:any)=>{
      this.empleados=resp;
    })
  }

  ngOnInit():void{
    this.listar();
  }

  registrar=()=>{
    this.empObj.nombres=this.formEmpleado.value.nombres;
    this.empObj.apellidos=this.formEmpleado.value.apellidos;
    this.empObj.edad=this.formEmpleado.value.edad;
    this.empObj.cargo=this.formEmpleado.value.cargo;

    this.empleadoService.nuevoEmpleado(this.empObj).subscribe(resp=>{
      this.listar();
      this.formEmpleado.reset();
    })
  }


  eliminar=(emp:empleado)=>{
    let confirma=window.confirm(`Esta seguro de eliminar al empleado ${emp.nombres} ${emp.apellidos} cuyo cargo es ${emp.cargo}?`);
    if(confirma){
      this.empleadoService.eliminarEmpleado(emp.id).subscribe(resp=>{
        this.listar()
      })
    }
  }

  editar=(emp:empleado)=>{

    this.muestraBtnR=false;
    this.muestraBtnA=true;

    this.empObj.id=emp.id;
    this.formEmpleado.controls['nombres'].setValue(emp.nombres);
    this.formEmpleado.controls['apellidos'].setValue(emp.apellidos);
    this.formEmpleado.controls['edad'].setValue(emp.edad);
    this.formEmpleado.controls['cargo'].setValue(emp.cargo);

  }

  actualizar=()=>{
    this.empObj.nombres=this.formEmpleado.value.nombres;
    this.empObj.apellidos=this.formEmpleado.value.apellidos;
    this.empObj.cargo=this.formEmpleado.value.cargo;
    this.empObj.edad=this.formEmpleado.value.edad;

    this.empleadoService.actualizarEmpleado(this.empObj, this.empObj.id).subscribe(resp=>{
      this.listar()
      this.formEmpleado.reset();
      this.muestraBtnA=false;
      this.muestraBtnR=true;
    })
  }

  cancelar=()=>{
    this.muestraBtnA=false;
    this.muestraBtnR=true;
    this.formEmpleado.reset();
  }
}
