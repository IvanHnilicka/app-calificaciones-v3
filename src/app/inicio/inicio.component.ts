import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(public theme:ThemeService){}

  materias = [
    {
      nombre: 'Español',
      color: "#FC3F28"
    },
    {
      nombre: 'Matemáticas',
      color: "#1CB027"
    },
    {
      nombre: 'Ciencias',
      color: "#1C30B0"
    },
  ];

  
  selectedTheme = 'pink';
  changeTheme(event: Event){
    this.selectedTheme = (event.target as HTMLSelectElement).value;
  }
}