import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { DriversApi } from './drivers-api';

describe('DriversApi', () => {
  let service: DriversApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DriversApi,
        // 1) fornisce HttpClient e consente di applicare eventuali interceptor dal DI
        provideHttpClient(),
      ],
    });

    service = TestBed.inject(DriversApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
