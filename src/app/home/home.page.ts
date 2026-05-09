import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Data } from '../services/data';
import { HttpOptions } from '@capacitor/core';
import { MyHttp } from '../services/my-http';
import { addIcons } from 'ionicons';
import {heart} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', 
  imports: [IonHeader, IonToolbar, CommonModule, IonTitle, IonContent, IonButton, RouterLink, IonInput, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButtons],
})
export class HomePage {
  
  MovieName: string = ""
  apiKey="c185f5ab98624d8025f52afe61f303f9"
  movieInfo!:any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey 
  }

  constructor(private md: Data, private router: Router, private mh: MyHttp) {
    addIcons({ heart });
  }

ngOnInit() {
  this.TodaysTrendingMovies();
}

async TodaysTrendingMovies() {
  let trendingUrl =  "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey ;
  this.options.url = trendingUrl;
  let result = await this.mh.get(this.options);
  this.movieInfo = result.data.results;
  console.log(this.movieInfo);
}

  async openMovies() {
    await this.md.set("MovieSearch", this.MovieName);
    this.router.navigate(['/movie-details'])
  }

  async openMovieDetails(movie:any) {
    await this.md.set("MovieDetails", movie)
    this.router.navigate(['/movie-details'])
  }

}
