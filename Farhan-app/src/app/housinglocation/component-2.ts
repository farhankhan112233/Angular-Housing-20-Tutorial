import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IhousingDetails } from '../IHousingDetails';
import { HousingService } from '../../Services/housing';
@Component({
  selector: 'app-component-2',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './component-2.html',
  styleUrls: ['./component-2.css'],
})
export class Component2 {
  // @Input() housingLocation!: IhousingDetails;
  housingLocations: IhousingDetails[] = [];
  Service = inject(HousingService);
  ngOnInit() {
    this.Service.getData().subscribe({
      next: (res) => {
        this.housingLocations = res;
      },
    });
  }
  ngDoCheck() {
    console.log(this.housingLocations);
  }
}
