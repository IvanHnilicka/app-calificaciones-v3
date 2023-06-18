import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { AjustesComponent } from './ajustes/ajustes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarMateriaComponent,
    AjustesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
