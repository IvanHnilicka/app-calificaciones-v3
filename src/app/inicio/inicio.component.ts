import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(public theme:ThemeService){ }
  selectedTheme:string = '';

  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
  }

  materias = ['Español', 'Matemáticas', 'Ciencias','Historia', 'Geografía', 'Inglés'];
  changeTheme(event: Event){
    this.selectedTheme = (event.target as HTMLSelectElement).value;
  }
}