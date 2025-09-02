import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth-service';
import { JwtDecode } from '../Directives/HelperFunctions';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const auth = inject(AuthService);

  if (auth.checklogin()) {
    return true;
  }
  localStorage.removeItem('Token');
  router.navigate(['Auth']);
  return false;
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('Token');
  if (!token) {
    router.navigate(['/Auth']);
    return false;
  }
  let payload: any;
  try {
    payload = JwtDecode(token);
  } catch {
    router.navigate(['/Auth']);
    return false;
  }
  if (payload.role?.toLowerCase() === 'admin') {
    return true;
  }
  router.navigate(['/homes']);
  return false;
};
