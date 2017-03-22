/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HighlightService } from './highlight.service';

describe('HighlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlightService]
    });
  });

  it('should ...', inject([HighlightService], (service: HighlightService) => {
    expect(service).toBeTruthy();
  }));
});
