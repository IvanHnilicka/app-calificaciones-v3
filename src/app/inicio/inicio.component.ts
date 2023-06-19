import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { LocalStorageService } from '../local-storage.service';
import { Materia } from '../materia.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(public theme:ThemeService, private ls: LocalStorageService){ }

  ngOnInit(): void {
    try{
      this.selectedTheme = this.theme.getCurrentTheme();
      this.materias = this.ls.getMaterias();
    }catch(error){
      console.log('Error. ', error);
    }
  }

  selectedTheme:string = 'light';
  materias: Materia[] = [];

  changeTheme(event: Event){
    this.selectedTheme = (event.target as HTMLSelectElement).value;
  }
}