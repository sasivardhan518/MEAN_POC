/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Api.service.tsService } from './api.service.ts.service';

describe('Service: Api.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api.service.tsService]
    });
  });

  it('should ...', inject([Api.service.tsService], (service: Api.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});