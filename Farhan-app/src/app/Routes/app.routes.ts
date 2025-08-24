import { Routes } from '@angular/router';
import { HomeComponent } from '../AppComponent/app';
import { Details } from '../details/details';
import { Component2 } from '../housinglocation/component-2';

export const routes: Routes = [
  {
    path: 'homes/details/:id',
    component: Details,
  },
  {
    path: 'homes',
    component: Component2,
  },
];
