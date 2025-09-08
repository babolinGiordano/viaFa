/// <reference types="jest" />

import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
setupZoneTestEnv();

import { TestBed } from '@angular/core/testing';
afterEach(() => TestBed.resetTestingModule());
