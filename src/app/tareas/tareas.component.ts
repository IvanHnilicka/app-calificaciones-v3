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
    this.colorBotonEditar();
  }
  textDecorationColor: string = '#bfbfbf';
  selectedTheme: string = 'light';
  tareas: Tarea[] = [
    {
      nombre: 'Tarea 1',
      fecha: new Date('2003-3-21'),
      completada: true,
    },
    {
      nombre: 'Tarea 2',
      fecha: new Date('2006-4-9'),
      completada: false,
    },
  ];


  // Tacha nombre de tareas completadas
  changeCompleted(index: number){
    let nombresTareas = document.querySelectorAll('.tarea');
    this.tareas[index].completada = !this.tareas[index].completada;

    if(!this.tareas[index].completada){
      // Se agrega delay para dar tiempo a que el botón cargue antes de modificarlo
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
