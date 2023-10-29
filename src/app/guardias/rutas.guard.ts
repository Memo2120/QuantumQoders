import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../servicios/usuario.service';

 export const RutasGuard: CanActivateFn = (route, state) => {
  const servicioLogin = inject(LoginService);
  const router = inject(Router);

  if (servicioLogin.eslogueado()) {
    return true;
  } 
  else {
    router.navigate(['/inicio']);
    return false;
    
  }
  
 };
