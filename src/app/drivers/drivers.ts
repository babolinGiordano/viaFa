import { Component, inject, OnInit, Signal } from '@angular/core';
import { DriversStore } from './drivers.store';
import { Driver } from './driver';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-drivers',
  imports: [
    MatProgressBar,
    MatCard,
    MatCardTitle,
    MatTable,
    MatCardContent,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
  ],
  templateUrl: './drivers.html',
  styleUrl: './drivers.scss',
})
export class Drivers implements OnInit {
  private store = inject(DriversStore);
  readonly drivers: Signal<Driver[]> = this.store.drivers;
  readonly loading = this.store.loading;
  readonly error = this.store.error;

  // ID non lo mostriamo, ma lo teniamo in data
  displayedColumns = [
    'name',
    'surname',
    'nationality',
    'dateOfBirth',
    'phoneNumber',
    'email',
  ];

  ngOnInit() {
    this.store.loadAll();
  }
}
