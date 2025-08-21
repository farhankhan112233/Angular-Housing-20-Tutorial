import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../Services/housing';
import { IhousingDetails } from '../IHousingDetails';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation?: IhousingDetails;
  applyForm: any;
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  }
  ngOnInit() {
    this.applyForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitApplication() {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();

      return;
    }
  }
}
