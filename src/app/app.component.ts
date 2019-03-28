import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ukraine map';
  constructor(overlayContainer: OverlayContainer) {
    console.log('ddds');
    overlayContainer.getContainerElement().classList.add('ukraine-map-dark-theme');
  }
}
