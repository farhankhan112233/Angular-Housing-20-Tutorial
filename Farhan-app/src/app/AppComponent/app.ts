import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header-component/header-component';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

@Component({
  selector: 'app-root',

  imports: [CommonModule, RouterOutlet, LoadingSpinner, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
