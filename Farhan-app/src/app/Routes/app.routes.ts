import { Routes } from '@angular/router';
import { adminGuard, authGuard } from '../Route Gaurds/auth-guard';

export const routes: Routes = [
  {
    path: 'Auth',
    loadComponent: () =>
      import('../Components/login-Signup/login').then((x) => x.Login),
  },
  {
    path: 'homes/details/:id',
    loadComponent: () =>
      import('../Components/details/details').then((x) => x.Details),
    canActivate: [authGuard],
  },
  {
    path: 'homes',
    loadComponent: () =>
      import('../Components/home-page/home-page').then((x) => x.HomePage),
    canActivate: [authGuard],
  },

  {
    path: 'Admin',
    loadComponent: () =>
      import('../Components/admin-portal/admin-portal').then(
        (x) => x.AdminPortal
      ),
    canActivate: [authGuard, adminGuard],
    loadChildren: () => [
      {
        path: 'add',
        loadComponent: () =>
          import(
            '../Components/admin-portal/add-housing-society/add-housing-society'
          ).then((x) => x.AddHousingSociety),
        canActivate: [authGuard, adminGuard],
      },
      {
        path: 'remove',
        loadComponent: () =>
          import(
            '../Components/admin-portal/remove-society/remove-society'
          ).then((x) => x.RemoveSociety),
        canActivate: [authGuard, adminGuard],
      },
    ],
  },
];
