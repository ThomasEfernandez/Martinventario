import { inject } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

export const authGuardFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLogged){
     return true;
  }else{
    alert('Por favor, inicie sesión para acceder a esta sección.');
    router.navigate(['/']);
    return false;
  }

}
