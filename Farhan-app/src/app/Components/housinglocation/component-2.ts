import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HousingService } from '../../Services/housing';
import { IhousingDetails } from '../../Interfaces/IHousingDetails';

@Component({
  selector: 'app-component-2',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './component-2.html',
  styleUrls: ['./component-2.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Component2 {
  housingLocations: IhousingDetails[] = [];
  Service = inject(HousingService);
  constructor() {}

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.Service.getData().subscribe({
      next: (res) => {
        this.housingLocations = res;
      },
      error: (err) => {
        throw new err();
      },
    });
  }
}
