import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-progress-bar',
  styleUrl: './custom-progress-bar.css',
  templateUrl: './custom-progress-bar.html',
})
export class CustomProgressBar {

  value = input(0);
  color = input('primary');

  // Ampliación
  striped = input(false);
  showText = input(false);


}
