import { Component } from '@angular/core';
import { Routes } from '@frontend/core';

@Component({
  selector: 'app-icon-weather',
  templateUrl: './icon-weather.component.html',
  styleUrls: ['./icon-weather.component.scss'],
})
export class IconWeatherComponent {
  public routes = Routes;
}
