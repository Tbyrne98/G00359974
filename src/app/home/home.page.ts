import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';
import { Data } from '../services/data';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, CommonModule, IonTitle, IonContent, IonButton, RouterLink, IonInput, FormsModule, IonItem, IonLabel],
})
export class HomePage {

  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=c185f5ab98624d8025f52afe61f303f9"
  }

  TodaysTrendingMovies:any = [];

  MovieName: string = ""
  constructor(private mh:MyHttp, private md: Data, private router: Router) {}

  ngOnInit() {
    this.getTodaysTrendingMovies();
  }
  
  async getTodaysTrendingMovies() {
    var result = await this.mh.get(this.options)
    this.TodaysTrendingMovies = result.data
    console.log(this.TodaysTrendingMovies)
  }

  async openTrendingMovies(t:any) {
    await this.md.set("TrendingMovie", t)
    this.router.navigate(['/movie-details'])
  }
}
