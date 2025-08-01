import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IhousingDetails } from '../IHousingDetails';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-component-2',
  // standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './component-2.html',
  styleUrls: ['./component-2.css'],
})
export class Component2 {
  @Input() housingLocation!: IhousingDetails;
}
