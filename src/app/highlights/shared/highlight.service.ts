import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Highlight } from './highlight.model';

@Injectable()
export class HighlightService {
  private highlightUrl = '/api/v1/content/templates/highlights';

  constructor(private http: Http) {
  }

  getHighlights(cityId: number, theatersIds?: string): Observable<any[]> {
    return this.http.get(`${this.highlightUrl}/${cityId}${theatersIds ? '?theatersIds=' + theatersIds : ''}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response): Array<Highlight> {
    return res.json().map(item => new Highlight(item)) || [];
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
