import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BounteousService {
    private url = 'https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main';

    constructor(private _http: HttpClient) {
    }

    getInitialData() {
        return this._http.get(`${this.url}/routes.json`);
    }

    getSelectedRouteData(key) {
        return this._http.get(`${this.url}${key}.json`);
    }
}