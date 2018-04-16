import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BoxComponent } from './box/box.component';
import { WithLoveComponent } from './with-love/with-love.component';

export const AngularElements = [WithLoveComponent, BoxComponent];

@NgModule({
    declarations: [...AngularElements, BoxComponent],
    imports: [BrowserModule],
    entryComponents: [...AngularElements],
})
export class ElementsModule {
    constructor(private injector: Injector) {
        const withLoveElement = createCustomElement(WithLoveComponent, {
            injector,
        });
        customElements.define('with-love', withLoveElement);

        const boxElement = createCustomElement(BoxComponent, {
            injector,
        });
        customElements.define('ct-box', boxElement);
    }

    ngDoBootstrap() {}
}
