import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appConfig } from './app/app.config';
import { HomeComponent } from './app/AppComponent/app';

bootstrapApplication(HomeComponent, appConfig).catch((err) =>
  console.error(err)
);
