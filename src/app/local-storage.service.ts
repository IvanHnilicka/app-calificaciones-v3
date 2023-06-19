import { Injectable } from '@angular/core';
import { Materia } from './materia.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  guardarMaterias(datos: Materia[]){
    localStorage.setItem('materias', JSON.stringify(datos));
  }

  getMaterias(){
    let materias = localStorage.getItem('materias');
    return materias?JSON.parse(materias):[];
  }
}
