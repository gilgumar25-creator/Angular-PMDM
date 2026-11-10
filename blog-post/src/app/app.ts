import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostComponent} from './components/blog-post-component/blog-post-component'

@Component({
  imports: [RouterOutlet,BlogPostComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog-post');
}
