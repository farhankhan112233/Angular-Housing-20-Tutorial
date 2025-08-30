import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../Services/housing';
import { IhousingDetails } from '../../Interfaces/IHousingDetails';

@Component({
  selector: 'app-details',

  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  apply: boolean = false;
  houseDetails?: IhousingDetails;
  applyForm!: FormGroup;
  constructor() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getById(id).subscribe({
      next: (res) => {
        this.houseDetails = res;
      },
    });
  }
  onApply() {
    this.apply = true;
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
    alert('Check Your Email For Detailed Info');
  }
}
