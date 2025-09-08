/** @type {import('jest').Config} */
const { createCjsPreset } = require('jest-preset-angular/presets');

module.exports = {
  ...createCjsPreset(),                       // ✅ preset ufficiale v15
  setupFilesAfterEnv: ['<rootDir>/src/test-jest.setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '<rootDir>/src/test.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@env$': '<rootDir>/src/environments/environment'
  },
  collectCoverageFrom: [
    'src/app/**/*.{ts}',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/environments/**'
  ],
  coverageDirectory: 'coverage'
};
