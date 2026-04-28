import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  
})
export class AppComponent {
  constructor() {
    addIcons({ heart });
  }
}

@Icon({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonButton, IonIcon],
})
export class IconComponent {
  constructor() {
    addIcons({ heart });
  }
}
