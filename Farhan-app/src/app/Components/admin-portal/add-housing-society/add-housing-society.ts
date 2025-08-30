import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../../../Services/admin-service';

@Component({
  selector: 'app-add-housing-society',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-housing-society.html',
  styleUrl: './add-housing-society.css',
})
export class AddHousingSociety {
  housingForm!: FormGroup;
  _service = inject(AdminService);
  selectedFiles: File[] = [];
  ngOnInit() {
    this.housingInput();
  }
  private housingInput() {
    this.housingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      units: new FormControl('', Validators.required),
      wifi: new FormControl('', Validators.required),
      laundry: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (!this.housingForm.valid) {
      this.housingForm.markAllAsTouched();
      return;
    }
    const controls = this.formValues();
    const formData = new FormData();
    formData.append('name', controls.name);
    formData.append('city', controls.city);
    formData.append('state', controls.state);
    formData.append('availableUnits', controls.availableUnits);
    formData.append('wifi', controls.wifi);
    formData.append('laundry', controls.laundry);
    formData.append('description', controls.description);

    this.selectedFiles.forEach((file) => {
      formData.append('photo', file);
    });
    this._service.AdminPost(formData).subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.housingForm.reset();
        }
      },
      error(err) {},
    });
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles.push(...(Array.from(input.files) as File[]));
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  private formValues() {
    const form = this.housingForm.getRawValue();
    return {
      name: form.name,
      city: form.city,
      state: form.state,
      availableUnits: form.units,
      wifi: form.wifi,
      laundry: form.laundry,
      description: form.description,
    };
  }
}
