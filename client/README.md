# Dapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

!! You need to:

`npm install crypto-browserify stream-browserify assert stream-http https-browserify os-browserify`

then add the following in the tsconfig's compiler optons:

`"paths" : {`
      `"crypto": ["./node_modules/crypto-browserify"],`
      `"stream": ["./node_modules/stream-browserify"],`
      `"assert": ["./node_modules/assert"],`
      `"http": ["./node_modules/stream-http"],`
      `"https": ["./node_modules/https-browserify"],`
      `"os": ["./node_modules/os-browserify"],`
      `"process": ["./node_modules/process/browser"]`
    `}`

and the this to polyfills.ts:

`import * as process from 'process';`
`import { Buffer } from 'buffer';`

`window.process = process;`
`(window as any).global = window;`
`global.Buffer = global.Buffer || Buffer;`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
