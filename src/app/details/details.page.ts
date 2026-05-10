import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHttp } from '../services/my-http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { Data } from '../services/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle]
})
export class DetailsPage implements OnInit {

  Details: string = "";
  apiKey="c185f5ab98624d8025f52afe61f303f9"
  movieInfo!:any;
  options: HttpOptions = {
    url: "https://api.themoviedb.org/3/person/31?api_key=" +this.apiKey + "&s="
  }

  constructor(private mh:MyHttp, private md:Data) { }

  ngOnInit() {
    this.getDetails();

  }
  async getDetails() {
    this.Details = await this.md.get('Details');
    this.options.url = "https://api.themoviedb.org/3/person/" + this.Details + "?api_key=" + this.apiKey
    let result = await this.mh.get(this.options)
    this.movieInfo = result.data
    console.log(this.movieInfo)
  }

}
