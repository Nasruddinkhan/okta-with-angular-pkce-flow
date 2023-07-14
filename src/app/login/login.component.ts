import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('callback app');
    const state = this.randomStr(40);
    const codeVerifier = this.randomStr(128);

    localStorage.setItem('state', state);
    localStorage.setItem('codeVerifier', codeVerifier);
    console.log(state);
    console.log(codeVerifier);

    const codeVerifierHash = CryptoJS.SHA256(codeVerifier).toString(
      CryptoJS.enc.Base64
    );

    const codeChallenge = codeVerifierHash
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const params = [
      'response_type=code',
      'state=' + state,
      'client_id=' + environment.clientId,
      'scope=openid',
      'code_challenge=' + codeChallenge,
      'code_challenge_method=S256',
      'redirect_uri=' + encodeURIComponent(environment.callbackUrl),
    ];

    let url = environment.loginUrl + '?' + params.join('&');

    window.location.href = url;
  }

  private randomStr(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
