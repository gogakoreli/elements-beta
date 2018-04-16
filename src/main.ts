import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ElementsModule } from './app/app.module';
import { environment } from './environments/environment';
import './polyfills';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(ElementsModule, { ngZone: 'noop' })
    .catch(err => console.log(err));
