import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iempleado } from '../modelo/Iempleado';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url="http://localhost:3001/empleados";

  constructor(private http:HttpClient) { }

  getEmpleados=()=>{
    
    let header=new HttpHeaders().set('Type-content', 'application/json');
    return this.http.get(this.url,{
      headers:header
    })

  }

  nuevoEmpleado=(data:Iempleado)=>{
    return this.http.post<Iempleado>(this.url, data)
    .pipe(map((resp)=>resp))
  }

  eliminarEmpleado=(id:number)=>{
    return this.http.delete<Iempleado>(`${this.url}/${id}`)
    .pipe(map((resp)=>resp))
  }

  actualizarEmpleado=(data:Iempleado, id:number)=>{
    return this.http.put<Iempleado>(`${this.url}/${id}`,data)
    .pipe(map((resp)=>resp))
  }

}
