import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(public theme:ThemeService){}

  materias = ['Español', 'Matemáticas', 'Ciencias','Historia', 'Geografía', 'Inglés'];

  selectedTheme = 'dark';
  changeTheme(event: Event){
    this.selectedTheme = (event.target as HTMLSelectElement).value;
  }
}