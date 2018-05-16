import { TestBed, inject } from '@angular/core/testing';

import { ToDo2Service } from './to-do2.service';

describe('ToDo2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDo2Service]
    });
  });

  it('should ...', inject([ToDo2Service], (service: ToDo2Service) => {
    expect(service).toBeTruthy();
  }));
});
