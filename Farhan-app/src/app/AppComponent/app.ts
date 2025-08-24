import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class HomeComponent {
  private router = inject(Router);

  constructor() {}
  ngOnInit() {
    this.router.navigate(['homes']);
  }
}
