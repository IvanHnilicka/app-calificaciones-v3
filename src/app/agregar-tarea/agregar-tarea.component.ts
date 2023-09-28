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

  tareas: Tarea[] = [];
  mensajeError = '';
  fechaTarea = '';  // Guardamos la fecha del input en una variable porque el código la toma como string
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
      // Si se seleccionó una fecha dentro del input obtenemos los datos de la variable y los asignamos a la fecha de la nueva tarea
      if(this.fechaTarea){
        let datosFecha = this.fechaTarea.split('-');      
        this.nuevaTarea.fecha.setFullYear(parseInt(datosFecha[0]), parseInt(datosFecha[1]) - 1, parseInt(datosFecha[2]));
      }
      
      // Asignamos la hora en 0 para considerarla desde que inicia el día
      this.nuevaTarea.fecha.setHours(0);
      this.nuevaTarea.fecha.setMinutes(0);
      this.nuevaTarea.fecha.setSeconds(0);
      
      this.tareas.push(this.nuevaTarea);
      this.ls.setTareas(this.tareas);
      this.router.navigate(['/tareas']);
    }
  }
}
