import { Routes } from '@angular/router';
import { AdminPortal } from '../admin-portal/admin-portal';
import { Details } from '../details/details';
import { HomePage } from '../home-page/home-page';
import { Login } from '../login-Signup/login';
import { AddHousingSociety } from '../admin-portal/add-housing-society/add-housing-society';
import { RemoveSociety } from '../admin-portal/remove-society/remove-society';

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
