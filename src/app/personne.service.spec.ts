import { TestBed, inject } from '@angular/core/testing';

import { PersonneService } from './personne.service';

describe('PersonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneService]
    });
  });

  it('should ...', inject([PersonneService], (service: PersonneService) => {
    expect(service).toBeTruthy();
  }));
});
