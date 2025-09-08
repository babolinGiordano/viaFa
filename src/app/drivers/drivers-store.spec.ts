import { TestBed } from '@angular/core/testing';
import { DriversStore } from './drivers.store';
import { Driver } from './driver';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('DriversStore (Signals + RxJS)', () => {
  let store: DriversStore;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DriversStore,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    store = TestBed.inject(DriversStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return empty list', () => {
    // stato iniziale
    expect(store.drivers()).toEqual([]);
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();

    // act
    store.loadAll();

    // durante la richiesta
    expect(store.loading()).toBe(true);

    // intercetta la GET e rispondi con []
    const req = httpMock.expectOne('http://localhost:3000/drivers');
    expect(req.request.method).toBe('GET');
    req.flush([] as Driver[]);

    // assert finali
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();
    expect(store.drivers()).toEqual([]); // empty
  });
});
