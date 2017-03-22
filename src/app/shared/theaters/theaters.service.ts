import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Theater } from './theater.model';

@Injectable()
export class TheatersService {
  private theatersUrl = '/api/v1/content/theaters';

  constructor(private http: Http) {
  }

  getAll(): Observable<Theater[]> {
    return this.http.get(`${this.theatersUrl}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getById(id: number): Observable<Theater[]> {
    return this.http.get(`${this.theatersUrl}/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllByCity(cityId: number): Observable<Theater[]> {
    return this.http.get(`${this.theatersUrl}/city/${cityId}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAllByNeighborhood(cityId: number, neighborhoodName: string): Observable<Theater[]> {
    return this.http.get(`${this.theatersUrl}/city/${cityId}/Neighborhood/${neighborhoodName}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response): Array<Theater> {
    return res.json().map(item => new Theater(item)) || [];
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
