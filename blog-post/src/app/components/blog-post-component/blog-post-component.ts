import { Component } from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  imports: [FormsModule,ReactiveFormsModule,NgbDatepickerModule],
  selector: 'app-blog-post-component',
  styleUrl: './blog-post-component.css',
  templateUrl: './blog-post-component.html',
})
export class BlogPostComponent {

  blogPost = new FormGroup({

  categorias = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

  title = new FormControl('', [Validators.required]),
  description = new FormControl('', [Validators.required]),
  category = new FormControl('', Validators.required),
  tags = new FormControl(''),
  email = new FormControl('', [Validators.required]),
  publishNow = new FormControl(true),
  publishDate = new FormControl(null),

  });

  guardar() {

    console.log('Título:', this.title.value);
    console.log('Descripción:', this.description.value);
    console.log('Categoría:', this.category.value);
    console.log('Etiquetas:', this.tags.value);
    console.log('Email:', this.email.value);
    console.log('Publicar ahora:', this.publishNow.value);
    console.log('Fecha:', this.publishDate.value);
  }



