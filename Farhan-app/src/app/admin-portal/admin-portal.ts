import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './admin-portal.html',
  styleUrl: './admin-portal.css',
})
export class AdminPortal {}
