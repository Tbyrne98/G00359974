import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonItem, IonButtons, IonItemDivider } from '@ionic/angular/standalone';
import { Data } from '../services/data';
import { MyHttp } from '../services/my-http';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {heart, home, person} from 'ionicons/icons';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, RouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButtons, IonItemDivider]
})
export class MovieDetailsPage implements OnInit {

  Movie: any;
  cast: any;
  crew: any;
  movieAttrs: any = [];
  movieInfo!:any;
  apiKey = "c185f5ab98624d8025f52afe61f303f9";
  options: HttpOptions = {
    url: ""
  };
  router: any;
  Details: string = ""
  Favourite: any[] = [];
  actor: string = ""


  constructor(private md: Data, private mh:MyHttp) {
    addIcons({heart, home});
   }

  ngOnInit() {
    this.getMovieDetails();
  }
  async getMovieDetails() {
  this.Movie = await this.md.get('MovieDetails');
  const movieId = this.Movie.id;
    this.options = {
      url: "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" +this.apiKey + "&append_to_response=credits"
    }
  let result = await this.mh.get(this.options);
  this.Movie = result.data;
  this.cast = result.data.credits.cast;
  this.crew = result.data.credits.crew;

  console.log(result.data);
}

async openDetails(person: any) {
  await this.md.set("DetailsSearch", person);
  this.router.navigate(['/details'])
}
  
isFavourites = false;

FavouritesList() {
  this.isFavourites = !this.isFavourites;

}


}
