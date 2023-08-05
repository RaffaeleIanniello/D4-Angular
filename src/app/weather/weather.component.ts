import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';
  isSearching: boolean = false;

  constructor(private weatherService: WeatherService) { }

  searchWeather(): void {
    if (!this.city) {
      this.errorMessage = 'Please enter a city name.';
      return;
    }

    this.isSearching = true;
    this.errorMessage = '';
    this.weatherData = null; 

    this.weatherService.getWeatherByCity(this.city)
      .subscribe(
        data => {
          this.weatherData = data;
          this.city = '';
          this.isSearching = false;
        },
        error => {
          this.errorMessage = error;
          this.isSearching = false;
        }
      );
  }
}
