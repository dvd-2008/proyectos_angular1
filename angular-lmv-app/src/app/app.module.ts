import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { DirectEstrucComponent } from './comp/direct-estruc/direct-estruc.component';
import { DirectAtribComponent } from './comp/direct-atrib/direct-atrib.component';
import { MenuComponent } from './comp/menu/menu.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';
import { VistasPipe } from './pipes/vistas.pipe';
import { TiendaFrutasComponent } from './comp/tienda-frutas/tienda-frutas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorFrutasPipe } from './pipes/buscador-frutas.pipe';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { HttpClientModule} from '@angular/common/http';
import { GestorEmpleadoComponent } from './comp/gestor-empleado/gestor-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectEstrucComponent,
    DirectAtribComponent,
    MenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    TuberiasComponent,
    VistasPipe,
    TiendaFrutasComponent,
    BuscadorFrutasPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    GestorEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
