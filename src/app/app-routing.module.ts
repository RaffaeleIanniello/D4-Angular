import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  [FormsModule]
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
