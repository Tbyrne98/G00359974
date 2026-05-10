import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonButton } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { Router } from '@angular/router';
import { HttpOptions } from '@capacitor/core';
import { MyHttp } from '../services/my-http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCard, IonButton]
})
export class FavouritesPage implements OnInit {

  favourites: any;
  apiKey="c185f5ab98624d8025f52afe61f303f9"
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey 
  }

  constructor(private md: Data, private mh: MyHttp, private router: Router) { }

  ngOnInit() {
    this.loadFavourites();
  }

  async loadFavourites() {
    let info = await this.md.get('Favourites');
    if (info) {
      this.favourites = info;
    }
    console.log(this.favourites);
  }

  async openMovieDetails(movie: any) {
    await this.md.set("MovieDetails", movie);
    this.router.navigate(['/movie-details'])
  }
}


