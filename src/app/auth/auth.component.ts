import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  response: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
        console.log('callback auth');

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['code']) {
        this.getAccessTokenAndUserInfo(params['code'], params['state']);
      }
    });
  }

  getAccessTokenAndUserInfo(code: string, state: string) {
     console.log(localStorage.getItem('codeVerifier'));
     console.log(state);
;
    if (state !== (localStorage.getItem('state') as string)) {
      console.log('Invalid state');
      return;
    }
    const payload = new HttpParams()
      .append('grant_type', 'authorization_code')
      .append('code', code)
      .append('code_verifier', localStorage.getItem('codeVerifier'))
      .append('redirect_uri', environment.callbackUrl)
      .append('client_id', environment.clientId);
    this.http
      .post(environment.tokenUrl, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .subscribe((response: any) => {
        console.log(response);
        this.response = response;
        let token = response.token_type + ' ' + response.access_token;
        console.log(token);

      });
  }
}
