import { Component, inject, OnInit, Signal } from '@angular/core';
import { DriversStore } from './drivers.store';
import { Driver } from './driver';

@Component({
  selector: 'app-drivers',
  imports: [],
  templateUrl: './drivers.html',
  styleUrl: './drivers.scss',
})
export class Drivers implements OnInit {
  private store = inject(DriversStore);

  readonly drivers: Signal<Driver[]> = this.store.drivers;
  readonly loading = this.store.loading;
  readonly error = this.store.error;

  ngOnInit() {
    this.store.loadAll();
  }
}
