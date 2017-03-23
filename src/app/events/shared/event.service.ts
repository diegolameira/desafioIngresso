import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Event } from './event.model';

@Injectable()
export class EventService {
  public apiUrl = `${environment.api}/v1/content/events`;

  constructor(public http: Http) {
  }

  getById(id: number): Observable<Event> {
    return this.http.get(`${this.apiUrl}/${id}`)
                    .map(res => new Event(res.json() || {}))
                    .catch(this.handleError);
  }

  getAll(): Observable<Event[]> {
    return this.http.get(`${this.apiUrl}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllByCity(cityId: number): Observable<Event[]> {
    return this.http.get(`${this.apiUrl}/city/${cityId}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  extractData(res: Response): Array<Event> {
    return res.json().map(item => new Event(item)) || [];
  }

  handleError(error: Response | any) {
    // TODO: log this error out to serverside
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
