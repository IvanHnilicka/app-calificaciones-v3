import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Materia } from '../materia.interface';
import { LocalStorageService } from '../local-storage.service';
import { Evaluacion } from '../evaluacion.interface';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit{
  constructor(private theme: ThemeService, private ls: LocalStorageService, private platform: Platform, private router: Router){ 
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/inicio'], { replaceUrl: true });
    })
  }
  
  ngOnInit(): void {
    try{
      this.selectedTheme = this.theme.getCurrentTheme();
      this.materias = this.ls.getMaterias();
    }catch(error){
      console.log('Error. ', error);
    }

    const inputNombre = document.getElementById('nombre-materia');
    inputNombre?.focus();
  }
  
  materias: Materia[] = [];
  selectedTheme:string = 'light';
  materiaGuardada: boolean = false;
  mensajeError: string = '';
  valorAnterior = 0;
  sumaPuntos = 0;

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
  
  // Actualiza el total mostrado
  sumarTotal(index: number): void {
    if(this.nuevaMateria.evaluaciones[index].valor < 0 || this.nuevaMateria.evaluaciones[index].valor > 100){
      this.mensajeError = '*Error. Ingrese un valor entre 1 y 100';
      this.nuevaMateria.evaluaciones[index].valor = 0;
    }
    this.sumaPuntos -= this.valorAnterior;
    this.sumaPuntos += this.nuevaMateria.evaluaciones[index].valor;
    this.valorAnterior = 0;
  }

  // Actualiza el total y elimina la evaluación
  eliminarEvaluacion(index: number): void {
    this.sumaPuntos -= this.nuevaMateria.evaluaciones[index].valor;
    this.nuevaMateria.evaluaciones.splice(index, 1);
  }


  guardarNuevaMateria(): void {
    // Valida que la materia tenga un nombre válido
    if(!this.nuevaMateria.nombre.replaceAll(' ', '')){
      this.materiaGuardada = false;
      this.mensajeError = '*Error. Ingrese nombre de materia';
      return;
    }
    
    let evaluaciones: Evaluacion[] = this.nuevaMateria.evaluaciones
    for(let i = 0; i < evaluaciones.length; i++){
      if(!evaluaciones[i].nombre.replaceAll(' ', '')){
        this.materiaGuardada = false;
        this.mensajeError = '*Error. Ingrese un nombre en la evaluacion ' + (i + 1);
        return;
      }
    }

    if(this.sumaPuntos != 100){
      this.materiaGuardada = false;
      this.mensajeError = '*Error. Total debe ser 100';
      return    
    }

    try{
      this.materias.push(this.nuevaMateria);
      this.ls.setMaterias(this.materias);
      this.materiaGuardada = true;
    }catch(error){
      console.log('Error. ', error);      
    }
  }
}
