import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Auth',
    pathMatch: 'full',
  },
  {
    path: 'Auth',
    loadComponent: () =>
      import('../Components/login-Signup/login').then((x) => x.Login),
  },
  {
    path: 'homes/details/:id',
    loadComponent: () =>
      import('../Components/details/details').then((x) => x.Details),
  },
  {
    path: 'homes',
    loadComponent: () =>
      import('../Components/home-page/home-page').then((x) => x.HomePage),
  },

  {
    path: 'Admin',
    loadComponent: () =>
      import('../Components/admin-portal/admin-portal').then(
        (x) => x.AdminPortal
      ),
    loadChildren: () => [
      {
        path: 'add',
        loadComponent: () =>
          import(
            '../Components/admin-portal/add-housing-society/add-housing-society'
          ).then((x) => x.AddHousingSociety),
      },
      {
        path: 'remove',
        loadComponent: () =>
          import(
            '../Components/admin-portal/remove-society/remove-society'
          ).then((x) => x.RemoveSociety),
      },
    ],
  },
];
