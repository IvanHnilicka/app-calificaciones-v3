import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { DetalleMateriaComponent } from './detalle-materia/detalle-materia.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { FooterComponent } from './footer/footer.component';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarMateriaComponent,
    AjustesComponent,
    DetalleMateriaComponent,
    EditarMateriaComponent,
    FooterComponent,
    TareasComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
