import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginViewModel, User} from '../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.apiUrl + 'user/';

  constructor(private http: HttpClient) {
  }

  doLogin(user: LoginViewModel): Observable<User> {
    return this.http.put<User>(this.url + 'login', user);
  }

  doSignUp(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'signUp', user);
  }
}
