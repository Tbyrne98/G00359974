import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Data } from '../services/data';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, CommonModule, IonTitle, IonContent, IonButton, RouterLink, IonInput, FormsModule],
})
export class HomePage {
  
  MovieName: string = ""
  constructor(private md: Data, private router: Router) {}

  async openMovies() {
    await this.md.set("MovieSearch", this.MovieName);
    this.router.navigate(['/movie-details'])
  }
}
