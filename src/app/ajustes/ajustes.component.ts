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
    this.selectedTheme = this.theme.getCurrentTheme();
  }
}
