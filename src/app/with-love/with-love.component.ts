import {
    Component,
    Input,
    OnInit,
    ViewEncapsulation
    } from '@angular/core';

@Component({
    selector: 'with-love',
    templateUrl: './with-love.component.html',
    styleUrls: ['./with-love.component.scss'],
    encapsulation: ViewEncapsulation.Native,
})
export class WithLoveComponent implements OnInit {
    @Input() public name: string;

    @Input() public url: string;

    @Input() public color: string = 'red';

    @Input() public size: number = 1;

    ngOnInit() {
        if (!this.name || this.name.length === 0) {
            console.error(`Name attribute must be provided!`);
        }
    }
}
