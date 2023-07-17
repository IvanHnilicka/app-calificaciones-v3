import { Component, OnInit } from '@angular/core';
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
}
