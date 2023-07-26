import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
  }

  ngAfterViewInit(){
    let nombresTareas = document.querySelectorAll('.tarea'); 
    for(let i = 0; i < nombresTareas.length; i++){
      if(this.tareas[i].completada){
        (nombresTareas[i] as HTMLElement).style.setProperty('text-decoration', 'line-through');
      }else{
        (nombresTareas[i] as HTMLElement).style.setProperty('text-decoration', 'none');
      }
    }

    this.colorBotonEditar();
  }


  selectedTheme: string = 'light';
  tareas: Tarea[] = [
    {
      nombre: 'Tarea 1',
      fecha: new Date(),
      completada: true,
    },
    {
      nombre: 'Tarea 2',
      fecha: new Date(),
      completada: false,
    },
  ];


  // Tacha nombre de tareas completadas
  changeCompleted(index: number){
    let nombresTareas = document.querySelectorAll('.tarea');
    this.tareas[index].completada = !this.tareas[index].completada;

    if(this.tareas[index].completada){
      (nombresTareas[index] as HTMLElement).style.setProperty('text-decoration', 'line-through');
    }else{
      (nombresTareas[index] as HTMLElement).style.setProperty('text-decoration', 'none');
      
      // Se agrega delay para dar tiempo a que el botón cargue antes de intentar modificarlo
      setTimeout(() => {
        this.colorBotonEditar()
      }, 1);      
    }
  }

  // Cambia la imagen del botón Editar según el tema escogido
  colorBotonEditar(){
    const btnEditar = document.getElementById('btn-editar');
    if(this.selectedTheme === 'dark'){
      (btnEditar as HTMLImageElement).src = '../../assets/edit-outline.svg';
    }
  }

  print(msg: string) {
    console.log(msg);
  }
}
