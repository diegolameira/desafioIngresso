/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheatersService } from './theaters.service';

describe('TheatersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheatersService]
    });
  });

  it('should ...', inject([TheatersService], (service: TheatersService) => {
    expect(service).toBeTruthy();
  }));
});
