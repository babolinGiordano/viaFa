import { Routes } from '@angular/router';
import { Drivers } from './drivers/drivers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'drivers',
    pathMatch: 'full',
  },
  {
    path: 'drivers',
    component: Drivers,
  },
  {
    path: '**',
    redirectTo: 'drivers',
  },
];
