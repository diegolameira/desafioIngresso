import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EventService } from '../../events/shared/event.service';
import { Event } from '../../events/shared/event.model';

@Injectable()
export class PremiereService extends EventService {
  public apiUrl = `${environment.api}/v0/templates/premiere`;

  constructor(public http: Http) {
    super(http);
  }


  getAllByCity(cityId: number): Observable<Event[]> {
    return this.http.get(`${this.apiUrl}/${cityId}`)
                    .map(super.extractData)
                    .catch(super.handleError);
  }

}
