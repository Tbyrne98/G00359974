import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonItem, IonButtons } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { MyHttp } from '../services/my-http';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {heart} from 'ionicons/icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, RouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButtons ]
})
export class MovieDetailsPage implements OnInit {

  Movie: any = {
    name: ""
  };
  movieAttrs: any = [];
  movieInfo!:any;

  constructor(private md: Data, private mh:MyHttp) {
    addIcons({heart});
   }

  ngOnInit() {
    this.getMovieFromStorage();
  }
  async getMovieFromStorage() {
  this.Movie = await this.md.get('MovieDetails');
  for (const attr in this.Movie) {
    this.movieAttrs.push(attr)
    }
    console.log(JSON.stringify(this.movieAttrs))
  }

}
