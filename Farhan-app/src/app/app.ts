import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2 } from './housinglocation/component-2';
import { IhousingDetails } from './IHousingDetails';
import { HousingService } from './housing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Component2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class HomeComponent {
  private router = inject(Router);
  housingLocationList: IhousingDetails[] = [];
  filteredLocationList: IhousingDetails[] = [];
  housingService: HousingService = inject(HousingService);

  openDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  constructor() {
    (async () => {
      try {
        const list = await this.housingService.getAllHousingLocations();
        this.housingLocationList = list;
        this.filteredLocationList = list;
      } catch (err) {
        console.error('Failed to load locations', err);
      }
    })();
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
