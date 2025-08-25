import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/AppComponent/app';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
