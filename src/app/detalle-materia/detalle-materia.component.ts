import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Materia } from '../materia.interface';
import { ThemeService } from '../theme.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {
  constructor(private theme: ThemeService, private ls: LocalStorageService, private route: ActivatedRoute, private platform: Platform, private router: Router){
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
      })

      // Toma la materia correspondiente al indice obtenido si existe, sino vuelve al inicio
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
    evaluaciones: []
  }

  index: number = -1;
  materias: Materia[] = [];
  materiasOrdenadas: Materia[] = [];
  materiaGuardada: boolean = true;
  mensajeError: string = '';
  selectedTheme: string = 'light';

  calcularPuntos(calificacion: number, valor: number): string{
    return (calificacion * valor / 100).toFixed(2);
  }

  calcularPromedio(): string{
    let promedio = 0;
    let evaluaciones = this.datosMateria.evaluaciones;
    for(let i = 0; i < evaluaciones.length; i++){
      promedio += Number((evaluaciones[i].calificacion * evaluaciones[i].valor / 100).toFixed(2));
    }    

    return promedio.toFixed(2);
  }

  validarInput(index:number): void{
    let calificacion = this.datosMateria.evaluaciones[index].calificacion;

    if(!calificacion || calificacion < 0 || calificacion > 100){
      this.datosMateria.evaluaciones[index].calificacion = 0;
    }
  }

  guardarCalificaciones(): void {
    try{
      this.materias[this.index] = this.datosMateria;
      this.ls.setMaterias(this.materias);
    }catch(error){
      console.log('Error. ', error);      
    }
  }
}
