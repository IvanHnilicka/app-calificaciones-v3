import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  getCurrentTheme(): string {
    let theme = localStorage.getItem('theme');
    return theme?theme:'light';
  }

  setTheme(selectedTheme: string): void {
    localStorage.setItem('theme', selectedTheme);
  }
}
