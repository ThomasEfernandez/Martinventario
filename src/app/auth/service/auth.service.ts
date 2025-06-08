import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  logIn(){
    this.isLogged = true;
  }

  logOut(){
    this.isLogged = false;
  }
}
