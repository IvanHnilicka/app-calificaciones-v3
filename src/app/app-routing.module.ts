import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { AjustesComponent } from './ajustes/ajustes.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'agregar', component: AgregarMateriaComponent },
  { path: 'ajustes', component: AjustesComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
