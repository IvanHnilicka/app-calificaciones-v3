import { Injectable } from '@angular/core';
import { Materia } from './materia.interface';
import { Tarea } from './tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  setMaterias(datos: Materia[]) {
    localStorage.setItem('materias', JSON.stringify(datos));
  }

  getMaterias() {
    let materias = localStorage.getItem('materias');
    return materias ? JSON.parse(materias) : [];
  }


  setTareas(tareas: Tarea[]) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
  
  getTareas() {
    let tareas = localStorage.getItem('tareas');
    return tareas?JSON.parse(tareas):[];
  }
  

  setOrdenar(valor: boolean) {
    localStorage.setItem('ordenarMaterias', JSON.stringify(valor));
  }

  getOrdenar() {
    return JSON.parse(localStorage.getItem('ordenarMaterias') || 'false');
  }

}
