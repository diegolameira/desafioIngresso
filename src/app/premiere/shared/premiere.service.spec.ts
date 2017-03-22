/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PremiereService } from './premiere.service';

describe('PremiereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiereService]
    });
  });

  it('should ...', inject([PremiereService], (service: PremiereService) => {
    expect(service).toBeTruthy();
  }));
});
