import { computed, inject, Injectable, signal } from '@angular/core';
import { DriversApi } from './drivers-api';
import { Driver } from './driver';
import { finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DriversStore {
  private api = inject(DriversApi);

  // privati
  private readonly _drivers = signal<Driver[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  // pubblici (read-only)
  readonly drivers = computed(() => this._drivers());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());

  loadAll(): void {
    this._loading.set(true);
    this._error.set(null);

    this.api
      .fetchAll()
      .pipe(finalize(() => this._loading.set(false)))
      .subscribe({
        next: (list) => this._drivers.set(list),
        error: () => {
          this._error.set('load_failed');
          this._drivers.set([]);
        },
      });
  }
}
