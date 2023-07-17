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

  agregarEvaluacion(): void {
    let evaluacion: Evaluacion = {
      nombre: '',
      valor: 0,
      calificacion: 0
    };

    this.datosMateria.evaluaciones.push(evaluacion);
  }

  eliminarEvaluacion(indiceEvaluacion: number): void {
    this.datosMateria.evaluaciones.splice(indiceEvaluacion, 1);
  }

  guardarNuevaMateria(): void {
    if(!this.datosMateria.nombre){
      this.materiaGuardada = false;
      this.mensajeError = '*Error. Ingrese nombre de materia';
      return;
    }
    
    let evaluaciones: Evaluacion[] = this.datosMateria.evaluaciones
    let suma: number = 0;
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

      if(evaluaciones[i].valor <= 0){
        this.materiaGuardada = false;
        this.mensajeError = '*Error. Valor no puede ser ' + evaluaciones[i].valor + ' en ' + evaluaciones[i].nombre;
        return;
      }

      suma += evaluaciones[i].valor;
    }

    if(suma != 100){
      this.materiaGuardada = false;
      this.mensajeError = '*Error. Verifique que la suma de valores sea de 100%';
      return    
    }

    try{
      this.materias[this.index] = this.datosMateria;
      this.ls.guardarMaterias(this.materias);
      this.materiaGuardada = true;
    }catch(error){
      console.log('Error. ', error);      
    }
  }

  eliminarMateria(): void {
    this.disabledBtn = true;

    try{
      this.materias.splice(this.index, 1);
      this.ls.guardarMaterias(this.materias);
    }catch(error){
      console.log('Error. ', error);
    }      
  }
}
