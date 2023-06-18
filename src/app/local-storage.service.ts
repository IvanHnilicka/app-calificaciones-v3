import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getCurrentTheme(): string{
    let selectedTheme = localStorage.getItem('theme');
    return selectedTheme?selectedTheme:'light';
  }

  changeTheme(theme: string): void{
    localStorage.setItem('theme', theme);
  }
}
