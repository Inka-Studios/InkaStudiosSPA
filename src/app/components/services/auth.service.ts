import { SERV_CONFIG } from './service-constants';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor( private http: Http ) {}

    getToken(credentials) {
        return this.http.post(SERV_CONFIG.AuthUrl, credentials)
            .map(res => res.json());
    }
}
