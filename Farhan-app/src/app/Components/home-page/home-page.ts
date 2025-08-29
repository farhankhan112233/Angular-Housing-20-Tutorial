import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Component2 } from '../housinglocation/component-2';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, Component2],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
