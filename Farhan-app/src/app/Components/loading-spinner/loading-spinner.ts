import { Component, inject } from '@angular/core';

import { LoadingService } from '../../../Services/loading-service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
})
export class LoadingSpinner {
  loadingService = inject(LoadingService);
}
