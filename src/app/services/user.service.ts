import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService {

  getUsers(): Observable<any> {
    return this.get('/users');
  }

  addUser(data: any): Observable<any> {
    return this.post('/users', data);
  }
}
