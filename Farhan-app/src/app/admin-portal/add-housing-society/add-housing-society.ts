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
  houseId!: any;
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
    if (this.housingForm.invalid) {
      return alert('Fill All fields');
    }
    const dto = this.formValues();

    this._service.AdminPost(dto).subscribe({
      next: (res) => {
        this.houseId = res.id;
      },
    });
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles.push(...(Array.from(input.files) as File[]));
    }
    console.log('Selected Files:', this.selectedFiles);
  }

  uploadFiles() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      alert('Please select files first!');
      return;
    }
    console.log(this.selectedFiles);
    const formdata = new FormData();
    formdata.append('housingId', this.houseId);

    this.selectedFiles.forEach((file) => {
      formdata.append('files', file);
    });
    this._service.uploadFiles(formdata);
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
      units: form.units,
      wifi: form.wifi,
      laundry: form.laundry,
      description: form.description,
    };
  }
}
