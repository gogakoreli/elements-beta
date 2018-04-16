import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-better',
    template: `
    <ng-template #noUrl>
        {{ name }}
    </ng-template>
    <span [style.font-size.em]="size">
    Made with <span [style.color]="color">♥</span> by
    <ng-container *ngIf="url && url.length > 0; else noUrl">
        <a [attr.href]="url" target="_blank">{{ name }}</a>
    </ng-container>
    </span>
  `,
    styleUrls: ['./better.component.scss'],
})
export class BetterComponent implements OnInit {
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
