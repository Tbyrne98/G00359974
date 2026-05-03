import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { HttpOptions } from '@capacitor/core';
import { MyHttp } from '../services/my-http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class MovieDetailsPage implements OnInit {

  MovieSearch: string = "";
  apiKey="c185f5ab98624d8025f52afe61f303f9"
  movieInfo! :any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/movie/862/credits?api_key=" +this.apiKey + "&s="
  }

  constructor(private md: Data, private mh:MyHttp) { }

  ngOnInit() {
    this.getMovieSearch();
  }
  async getMovieSearch() {
  this.MovieSearch = await this.md.get('MovieSearch');
  this.options.url = this.options.url.concat(this.MovieSearch)
  this.movieInfo = await this.mh.get(this.options)
  console.log(JSON.stringify(this.movieInfo.data))
  }

}
