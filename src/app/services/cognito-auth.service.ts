import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CognitoAuthService extends BaseHttpService{

/*
  protected override baseUrl: string = 'https://api.example.com';
  
   initiateAuth(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-Target': this.target,
    });

    const body = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };

    return this.http.post(this.url, body, { headers });


register(data: any): Observable<any> {
    return this.post('/users/register', data);
}

login(data: any): Observable<any> {
    return this.post('/users', data);
}

logout(): Observable<any> {
        return this.post('/logout', {});
    }
        */
}
