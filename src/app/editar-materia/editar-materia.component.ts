import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { Materia } from '../materia.interface';
import { LocalStorageService } from '../local-storage.service';
import { Evaluacion } from '../evaluacion.interface';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit {
  constructor(private theme: ThemeService, private ls: LocalStorageService, private route: ActivatedRoute, private platform: Platform, private router: Router) {
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/inicio'], { replaceUrl: true });
    });
  }
  
  ngOnInit(): void {
    try{
      this.selectedTheme = this.theme.getCurrentTheme();
      this.materias = this.ls.getMaterias();      
      this.route.params.subscribe(params => {
        this.index = params['index'];
      });
      
      this.datosMateria = this.materias[this.index];
      
      if(this.materias[this.index]){
        this.datosMateria = this.materias[this.index];
      }else{
        this.router.navigate(['/inicio'], { replaceUrl: true });
      }
      
    }catch(error){ 
      console.log('Error. ', error);      
    }
  }

  datosMateria: Materia = {
    nombre: '',
    evaluaciones: [],
  }

  disabledBtn: boolean = false;
  index: number = 0;
  modalConfirmacion = false;
  modalEliminada = false;
  materias: Materia[] = [];
  materiaGuardada: boolean = false;
  mensajeError: string = '';
  selectedTheme: string = 'light';
  sumaPuntos: number = 100;
  valorAnterior = 0;

  agregarEvaluacion(): void {
    let evaluacion: Evaluacion = {
      nombre: '',
      valor: 0,
      calificacion: 0
    };

    this.datosMateria.evaluaciones.push(evaluacion);
  }

  // Actualiza el total mostrado
  sumarTotal(index: number): void {
    if(this.datosMateria.evaluaciones[index].valor <= 0 || this.datosMateria.evaluaciones[index].valor > 100){
      this.mensajeError = '*Error. Ingrese un valor entre 1 y 100';
      this.datosMateria.evaluaciones[index].valor = 0;
    }
    this.sumaPuntos -= this.valorAnterior;
    this.sumaPuntos += this.datosMateria.evaluaciones[index].valor;
    this.valorAnterior = 0;
  }

  eliminarEvaluacion(indiceEvaluacion: number): void {
    this.sumaPuntos -= this.datosMateria.evaluaciones[indiceEvaluacion].valor;
    this.datosMateria.evaluaciones.splice(indiceEvaluacion, 1);
  }

  guardarNuevaMateria(): void {
    if(!this.datosMateria.nombre){
      this.materiaGuardada = false;
      this.mensajeError = '*Error. Ingrese nombre de materia';
      return;
    }
    
    let evaluaciones: Evaluacion[] = this.datosMateria.evaluaciones
    for(let i = 0; i < evaluaciones.length; i++){
      if(!this.datosMateria.nombre.replaceAll(' ', '')){
        this.materiaGuardada = false;
        this.mensajeError = '*Error. Ingrese nombre de materia';
        return;
      }

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
      this.materias[this.index] = this.datosMateria;
      this.ls.setMaterias(this.materias);
      this.materiaGuardada = true;
    }catch(error){
      console.log('Error. ', error);      
    }
  }

  eliminarMateria(): void {
    this.disabledBtn = true;

    try{
      this.materias.splice(this.index, 1);
      this.ls.setMaterias(this.materias);
    }catch(error){
      console.log('Error. ', error);
    }      
  }
}
