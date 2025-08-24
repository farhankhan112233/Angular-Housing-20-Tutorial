import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../Services/housing';
import { IhousingDetails } from '../IHousingDetails';

@Component({
  selector: 'app-details',

  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation?: IhousingDetails[] = [];
  applyForm!: FormGroup;
  constructor() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getById(id).subscribe({
      next(res) {
        // this.housingLocation = res;
      },
    });
  }
  ngOnInit() {
    this.formValue();
  }
  private formValue() {
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
