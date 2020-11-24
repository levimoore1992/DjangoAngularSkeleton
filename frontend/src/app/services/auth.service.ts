import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  loginUser(body) {
    return this.http.post(environment.api + 'api/rest-auth/login/', body);
  }

  registerUser(body) {
    return this.http.post(environment.api + 'api/rest-auth/registration/', body);
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
      localStorage.clear();
      // location.reload();
      this.router.navigate(['']);
      // this.http.post(environment.api + 'api/rest-auth/logout', null);
  }


}
