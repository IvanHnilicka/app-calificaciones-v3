import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { DetalleMateriaComponent } from './detalle-materia/detalle-materia.component';
import { EditarMateriaComponent } from './editar-materia/editar-materia.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'agregar', component: AgregarMateriaComponent },
  { path: 'ajustes', component: AjustesComponent },
  { path: 'detalle/:index', component: DetalleMateriaComponent },
  { path: 'editar/:index', component: EditarMateriaComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
