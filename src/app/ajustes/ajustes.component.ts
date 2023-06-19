import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit{  
  constructor(public theme:ThemeService){ }
  selectedTheme:string = '';
  
  ngOnInit(): void {
    try{
      this.selectedTheme = this.theme.getCurrentTheme();
    }catch(error){
      console.log('Error. ', error);
      this.selectedTheme = 'light';
    }

    let opciones = document.querySelectorAll('.opcion');
    opciones.forEach(opcion => {
      opcion.addEventListener('click', () => {        
        let tema = opcion.getAttribute('tema');
        this.selectedTheme = tema ? tema : 'light';
        this.theme.setTheme(this.selectedTheme);
      })
    });
  }
}
