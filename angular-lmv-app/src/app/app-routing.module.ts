import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { DirectEstrucComponent } from './comp/direct-estruc/direct-estruc.component';
import { DirectAtribComponent } from './comp/direct-atrib/direct-atrib.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';
import { TiendaFrutasComponent } from './comp/tienda-frutas/tienda-frutas.component';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { GestorEmpleadoComponent } from './comp/gestor-empleado/gestor-empleado.component';

const routes: Routes = [
  {path:'interpolando', component:InterpolacionComponent},
  {path:'directivas-estructurales', component:DirectEstrucComponent},
  {path:'directivas-atributos', component:DirectAtribComponent},
  {path:'tuberias', component:TuberiasComponent},
  {path:'tienda-frutas',component:TiendaFrutasComponent},
  {path:'manejo-template',component:TemplateDrivenComponent},
  {path:'manejo-model',component:ModelDrivenComponent},
  {path:'componente-empleado-servicio', component:GestorEmpleadoComponent},
  {path:'inicio', component:HomeComponent},
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'**', pathMatch:'full', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
