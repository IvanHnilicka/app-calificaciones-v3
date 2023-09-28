import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Tarea } from '../tarea.interface';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  constructor(private theme: ThemeService, private ls: LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
    this.tareas = this.ls.getTareas();
    
    // Separa las tareas por secciones según la fecha
    let fechaActual = new Date();
    fechaActual.setHours(0);
    fechaActual.setMinutes(0);
    fechaActual.setSeconds(0);
    console.log("Fecha actual: ", fechaActual);

    this.tareas.forEach(tarea => {
      tarea.fecha = new Date(tarea.fecha);
      tarea.fecha.setHours(0);
      tarea.fecha.setMinutes(0);
      tarea.fecha.setSeconds(0);

      let diferencia = Math.ceil((tarea.fecha.getTime() - fechaActual.getTime()) / (1000 * 3600 * 24));

      console.log(tarea);
      console.log(diferencia);     

      if(diferencia < 0){ 
        this.tareasPasadas.push(tarea);
      }
      else if(diferencia === 0){       
        this.tareasHoy.push(tarea);
      } 
      else if(diferencia > 0 && diferencia < 7){
        this.tareasSemana.push(tarea);
      }
      else{
        this.tareasTarde.push(tarea);
      }
    })

    // Ordena las tareas por fecha
    this.tareasSemana.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
    this.tareasTarde.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
    this.tareasHoy.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
    this.tareasPasadas.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
  }

  textDecorationColor: string = '#bfbfbf';
  selectedTheme: string = 'light';
  tareas: Tarea[] = [];
  tareasPasadas: Tarea[] = []
  tareasHoy: Tarea[] = [];
  tareasSemana: Tarea[] = [];
  tareasTarde: Tarea[] = [];

  dias: any = {
    Mon: 'Lun',
    Tue: 'Mar',
    Wed: 'Mie',
    Thu: 'Jue',
    Fri: 'Vie',
    Sat: 'Sab',
    Sun: 'Dom'
  }

  meses: any = {
    Jan: 'Ene',
    Feb: 'Feb',
    Mar: 'Mar',
    Apr: 'Abr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Aug: 'Ago',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dec: 'Dic'
  }
  

  // Formatea la fecha que se muestra al usuario
  formatDate(fecha: Date): string {
    let fechaActual = new Date();  
    let datosFecha = fecha.toUTCString().split(' ');
    
    if((fecha.getTime() - fechaActual.getTime()) / (1000 * 3600 *24) < -1){
      return this.meses[datosFecha[2]] + ' ' + datosFecha[1];
    }else if((fecha.getTime() - fechaActual.getTime()) / (1000 * 3600 *24) < 7){
      return this.dias[datosFecha[0].replace(',', '')] + ' ' + datosFecha[1];
    }else {      
      return this.meses[datosFecha[2]] + ' ' + datosFecha[1];
    }
  }


  // Cambia el estado de completado de la tarea
  changeCompleted(tarea: Tarea): void{
    let index = this.tareas.indexOf(tarea);    
    this.tareas[index].completada = !this.tareas[index].completada;
    this.ls.setTareas(this.tareas);
  }

  // Elimina la tarea del almacenamiento local y recarga la página para refrescar los datos
  eliminarTarea(tarea: Tarea): void {
    let index = this.tareas.indexOf(tarea);
    this.tareas.splice(index, 1);
    this.tareasSemana = [];
    this.tareasTarde = [];
    this.tareasHoy = []
    this.tareasPasadas = [];
    this.ls.setTareas(this.tareas); 
    this.ngOnInit()
  }

}
