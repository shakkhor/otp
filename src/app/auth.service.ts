import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public secretMisMatch = false;
  constructor() { }

  public login(userInfo: User){
    if(userInfo.email=='correctToken'){
      localStorage.setItem('ACCESS_TOKEN', "access_token");
      console.log('auth working')
    }    else{
      localStorage.removeItem('ACCESS_TOKEN');
      console.log('auth failed')
      this.secretMisMatch = true;
      // console.log(this.secretMisMatch)
    }
  }
 

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}