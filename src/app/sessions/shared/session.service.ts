import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Session, SessionListItem } from './session.model';

@Injectable()
export class SessionService {
  public apiUrl = '/api/v1/content/sessions';

  constructor(public http: Http) {
  }

  getById(id: number): Observable<Session> {
    return this.http.get(`${this.apiUrl}/${id}`)
                    .map(res => new Session(res.json() || {}))
                    .catch(this.handleError);
  }

  getAllByCity(cityId: number): Observable<SessionListItem[]> {
    return this.http.get(`${this.apiUrl}/city/${cityId}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllByCityAndTheater(cityId: number, theaterId: string): Observable<SessionListItem[]> {
    return this.http.get(`${this.apiUrl}/city/${cityId}/theater/${theaterId}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllByCityAndEvent(cityId: number, theaterId: string): Observable<SessionListItem[]> {
    return this.http.get(`${this.apiUrl}/city/${cityId}/theater/${theaterId}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response): Array<SessionListItem> {
    return res.json().map(item => new SessionListItem(item)) || [];
  }

  private handleError(error: Response | any) {
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
