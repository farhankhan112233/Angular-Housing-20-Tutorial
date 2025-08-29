import { Routes } from '@angular/router';
import { AddHousingSociety } from '../Components/admin-portal/add-housing-society/add-housing-society';
import { AdminPortal } from '../Components/admin-portal/admin-portal';
import { RemoveSociety } from '../Components/admin-portal/remove-society/remove-society';
import { Details } from '../Components/details/details';
import { HomePage } from '../Components/home-page/home-page';
import { Login } from '../Components/login-Signup/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Auth',
    pathMatch: 'full',
  },
  {
    path: 'Auth',
    component: Login,
  },
  {
    path: 'homes/details/:id',
    component: Details,
  },
  {
    path: 'homes',
    component: HomePage,
  },

  {
    path: 'Admin',
    component: AdminPortal,
    children: [
      {
        path: 'add',
        component: AddHousingSociety,
      },
      {
        path: 'remove',
        component: RemoveSociety,
      },
    ],
  },
];
