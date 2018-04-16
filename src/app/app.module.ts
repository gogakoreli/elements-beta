import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BetterComponent } from './better.component';

@NgModule({
    declarations: [BetterComponent],
    imports: [BrowserModule],
    entryComponents: [BetterComponent],
})
export class AppModule {
    constructor(private injector: Injector) {
        const customElement = createCustomElement(BetterComponent, {
            injector,
        });
        customElements.define('with-love', customElement);
    }

    ngDoBootstrap() {}
}
