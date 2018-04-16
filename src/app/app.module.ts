import { Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { WithLoveComponent } from './with-love/with-love.component';

export const AngularElements = [WithLoveComponent];

@NgModule({
    declarations: [...AngularElements],
    imports: [BrowserModule],
    entryComponents: [...AngularElements],
})
export class AppModule {
    constructor(private injector: Injector) {
        const customElement = createCustomElement(WithLoveComponent, {
            injector,
        });
        customElements.define('with-love', customElement);
    }

    ngDoBootstrap() {}
}
