import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService {

//  apiLogin = 'https://api.github.com/users/whatever';

  apiLogin = '/urlGitHub/login/oauth/access_token';
  apiUser  = '/apiGitHub/user';
  apiRepos = '/apiGitHub/users/';
  teste: any;

  constructor(private http: HttpClient) {}

  getToken(clientId: string, clientSecret: string, code: string) {
    const payLoad = {'client_id': clientId,
                     'client_secret': clientSecret,
                     'code': code};
    return this.http.post(`${this.apiLogin}`, payLoad, {responseType: 'text' as 'json'});
  }

  getUsuario(accessToken: string) {
    return this.http.get(this.apiUser + '?access_token=' + accessToken)
      .pipe(map((response: Response) => response));
  }

  getRepositorios(accessToken: string, user: string) {
    return this.http.get(this.apiRepos + user + '/repos?access_token=' + accessToken)
      .pipe(map((response: Response) => response));
  }
}
