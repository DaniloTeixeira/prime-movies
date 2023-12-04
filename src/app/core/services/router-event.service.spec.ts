import { TestBed } from '@angular/core/testing';

import { RouterEventService } from './router-event.service';

describe('RouterEventService', () => {
  let service: RouterEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
