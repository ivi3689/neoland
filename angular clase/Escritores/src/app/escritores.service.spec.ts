import { TestBed, inject } from '@angular/core/testing';

import { EscritoresService } from './escritores.service';

describe('EscritoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscritoresService]
    });
  });

  it('should be created', inject([EscritoresService], (service: EscritoresService) => {
    expect(service).toBeTruthy();
  }));
});
