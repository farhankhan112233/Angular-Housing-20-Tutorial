import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HousingService } from '../../Services/housing';
import { Component2 } from '../housinglocation/component-2';
import { IhousingDetails } from '../IHousingDetails';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Component2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class HomeComponent {
  private router = inject(Router);

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  constructor() {}
}
