import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class TableService {
    constructor(private http: Http) { }

    createTable(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + 'createTable', data, { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateTable(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + 'updateTable', data, { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteTable(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + 'deleteTable', data, { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    allTablesSearch(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + 'tables', data, { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
