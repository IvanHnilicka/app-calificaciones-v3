import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Materia } from '../materia.interface';
import { ThemeService } from '../theme.service';
import { Evaluacion } from '../evaluacion.interface';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {
  constructor(private theme: ThemeService, private ls: LocalStorageService, private router: ActivatedRoute){}
  
  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
    this.materias = this.ls.getMaterias();
    this.router.params.subscribe(params => {
      this.index = params['index'];
    })

    this.datosMateria = this.materias[this.index];
  }

  datosMateria: Materia = {
    nombre: '',
    evaluaciones: []
  }

  index: number = -1;
  materias: Materia[] = [];
  materiaGuardada = true;
  mensajeError = '';
  selectedTheme = '';

  calcularPuntos(calificacion: number, valor: number): string{
    return (calificacion * valor / 100).toFixed(2);
  }

  calcularPromedio(): string{
    let suma = 0;
    let evaluaciones = this.datosMateria.evaluaciones;
    for(let i = 0; i < evaluaciones.length; i++){
      suma += evaluaciones[i].calificacion;
    }

    return (suma / evaluaciones.length).toFixed(2);
  }

  validarInput(index:number): void{
    let calificacion = this.datosMateria.evaluaciones[index].calificacion;

    if(!calificacion || calificacion < 0 || calificacion > 100){
      this.datosMateria.evaluaciones[index].calificacion = 0;
    }
  }

  guardarCalificaciones(): void {
    this.materias[this.index] = this.datosMateria;
    this.ls.guardarMaterias(this.materias);
  }
}
