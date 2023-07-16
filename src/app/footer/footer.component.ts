import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private theme: ThemeService){}

  ngOnInit(): void {
    this.selectedTheme = this.theme.getCurrentTheme();
  }

  selectedTheme: string = 'light';
}
