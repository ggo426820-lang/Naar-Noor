import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = [
    {
      title: 'Starters',
      image: 'assets/368bc588-c966-4d7d-8001-d57a90faa70d_3840w.jpg'
    },
    {
      title: 'Grill & BBQ',
      image: 'assets/6527c082-4110-43ea-9d91-0bf6f431ffb9_3840w.jpg'
    },
    {
      title: 'Himalayan Mains',
      image: 'assets/hero.webp'
    },
    {
      title: 'Cocktails',
      image: 'assets/368bc588-c966-4d7d-8001-d57a90faa70d_3840w.jpg'
    }
  ];
}
