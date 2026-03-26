import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent {
  chefs = [
    {
      name: 'Arjun Rai',
      role: 'Head Chef',
      image: 'assets/Arjun.webp',
      bio: 'With over 20 years mastering fire-based cooking techniques in Kathmandu, Chef Arjun brings an uncompromising standard for authentic flavor and presentation to every plate.'
    },
    {
      name: 'Maya Sherpa',
      role: 'Sous Chef',
      image: 'assets/6527c082-4110-43ea-9d91-0bf6f431ffb9_3840w.jpg',
      bio: 'A specialist in Himalayan spices and marinades, Maya\'s delicate touch balances the intense heat of the grill with subtle, fragrant undertones that define our signature dishes.'
    }
  ];
}
