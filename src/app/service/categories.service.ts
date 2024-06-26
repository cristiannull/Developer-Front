import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  constructor() {}

  getVideogames() {
    return this.http.get('http://localhost:3000/api/videogame');
  }

  getGender() {
    return this.http.get('http://localhost:3000/api/genders');
  }

  getTheme() {
    return this.http.get('http://localhost:3000/api/themes');
  }

  getGameMode() {
    return this.http.get('http://localhost:3000/api/gamemodes');
  }

  getPegi() {
    return this.http.get('http://localhost:3000/api/pegis');
  }

  getDeveloper() {
    return this.http.get('http://localhost:3000/api/developers');
  }
}
