import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantService {
    constructor(private http: Http) { }

    searchAllRestaurant() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(environment.apiUrl + 'restaurants', { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
