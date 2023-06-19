import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Materia } from '../materia.interface';
import { NonNullableFormBuilder } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { Evaluacion } from '../evaluacion.interface';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit{
  constructor(private theme: ThemeService, private ls: LocalStorageService){ }
  
  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
    this.materias = this.ls.getMaterias();
  }
  
  materias: Materia[] = [];
  selectedTheme:string = '';
  materiaGuardada = false;
  mensajeError = '';

  nuevaMateria: Materia = {
    nombre: '',
    evaluaciones: [
      {
        nombre: '',
        valor: 0,
        calificacion: 0
      }
    ]
  };
  
  agregarEvaluacion(): void {
    let evaluacion: Evaluacion = {
      nombre: '',
      valor: 0,
      calificacion: 0
    };

    this.nuevaMateria.evaluaciones.push(evaluacion);
  }

  eliminarEvaluacion(index: number): void {
    this.nuevaMateria.evaluaciones.splice(index, 1);
  }

  guardarNuevaMateria(): void {
    if(!this.nuevaMateria.nombre){
      this.materiaGuardada = false;
      this.mensajeError = 'Error. Ingrese nombre de materia';
      console.log('Error. Ingrese nombre de materia');  
      return;
    }
    
    let evaluaciones: Evaluacion[] = this.nuevaMateria.evaluaciones
    let suma: number = 0;
    for(let i = 0; i < evaluaciones.length; i++){
      if(!evaluaciones[i].nombre){
        this.materiaGuardada = false;
        this.mensajeError = 'Error. Ingrese un nombre en la evaluacion ' + (i + 1);
        console.log('Error. Ingrese un nombre en la evaluacion ', (i + 1));
        return;
      }

      suma += evaluaciones[i].valor;
    }

    if(suma != 100){
      this.materiaGuardada = false;
      this.mensajeError = 'Error. Verifique que la suma de valores sea de 100%';
      console.log('Error. Verifique que la suma de valores sea de 100%');  
      return    
    }

    try{
      this.materias.push(this.nuevaMateria);
      this.ls.guardarMaterias(this.materias);
      this.materiaGuardada = true;
    }catch(error){
      console.log('Error. ', error);      
    }
  }
}
