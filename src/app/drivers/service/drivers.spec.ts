import { TestBed } from '@angular/core/testing';
import { Drivers } from './drivers';
import { provideHttpClient } from '@angular/common/http';

describe('Drivers', () => {
  let service: Drivers;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Drivers,
        // 1) fornisce HttpClient e consente di applicare eventuali interceptor dal DI
        provideHttpClient(),
      ],
    });

    service = TestBed.inject(Drivers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
