import { Component, signal } from '@angular/core';
import { CharacterListComponent } from './components/character-list-component/character-list-component';

@Component({
  imports: [CharacterListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('starwars-api');
}
