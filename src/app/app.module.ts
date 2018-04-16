import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetterComponent } from './better.component';

@NgModule({
    declarations: [AppComponent, BetterComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [BetterComponent],
    schemas: [NO_ERRORS_SCHEMA],
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
