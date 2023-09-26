import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Tarea } from '../tarea.interface';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  constructor(private theme: ThemeService, private ls: LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
    this.tareas = this.ls.getTareas();

    const inputNombre = document.getElementById('nombre-tarea');
    inputNombre?.focus();
  }

  fecha = new Date()
  tareas: Tarea[] = [];
  mensajeError = '';
  nuevaTarea: Tarea = {
    nombre: '',
    fecha: new Date(),
    completada: false,
  }

  selectedTheme: string = 'light';

  guardarTarea(): void {
    if(this.nuevaTarea.nombre.replaceAll(' ', "") === '') {
      this.mensajeError = '*Error. Ingresa un nombre válido'
    }else {
      this.tareas.push(this.nuevaTarea);
      this.ls.setTareas(this.tareas);
      this.router.navigate(['/tareas']);
    }
  }
}
