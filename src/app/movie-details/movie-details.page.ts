import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class MovieDetailsPage implements OnInit {

movie: any;

  constructor(private md: Data) { }

  ngOnInit() {
    this.getMovieFromStorage();
  }

  async getMovieFromStorage() {
    this.movie = await this.md.get("movie")
    console.log(this.movie)
  }

}
