import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { LocalStorageService } from '../local-storage.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit{  
  constructor(private theme:ThemeService, private ls:LocalStorageService, private platform: Platform, private router: Router){ 
    this.platform.backButton.subscribe(() => {
      this.router.navigate(['/inicio'], { replaceUrl: true });
    });
  }
  
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

  selectedTheme:string = 'light';
  modalConfirmacion: boolean = false;
  modalEliminadas: boolean = false;

  borrarMaterias(): void{
    try{
      this.ls.guardarMaterias([]);
    }catch(error){
      console.log('Error. ', error);      
    }
  }
}
