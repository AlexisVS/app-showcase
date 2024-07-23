import {Component, OnInit} from '@angular/core';
import {Showcase} from '../_types/showcaseType';
import {
    EqDateRangeComponent,
    EqDateTimeComponent,
    EqDateComponent,
    EqM2oComponent,
    EqStringComponent,
    EqTextComponent,
    // @ts-ignore
} from 'sb-shared-lib';

import eqText from '../component-doc/eq-text.json';
import eqString from '../component-doc/eq-string.json';
import eqM2o from '../component-doc/eq-m2o.json';
import eqDateTime from '../component-doc/eq-date-time.json';
import eqDateRange from '../component-doc/eq-date-range.json';
import eqDate from '../component-doc/eq-date.json';

@Component({
    selector: 'app-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    public showcases: Record<string, { columns: number, showcase: Showcase }> = {
        eqString: {showcase: eqString, columns: 4},
        eqText: {showcase: eqText, columns: 4},
        eqDate: {showcase: eqDate, columns: 2},
        eqDateTime: {showcase: eqDateTime, columns: 2},
        eqDateRange: {showcase: eqDateRange, columns: 2},
        eqM2o: {showcase: eqM2o, columns: 2},
    };

    public ngOnInit(): void {
        this.showcases.eqM2o.showcase.componentSelector = EqM2oComponent;
        this.showcases.eqString.showcase.componentSelector = EqStringComponent;
        this.showcases.eqText.showcase.componentSelector = EqTextComponent;
        this.showcases.eqDate.showcase.componentSelector = EqDateComponent;
        this.showcases.eqDateTime.showcase.componentSelector = EqDateTimeComponent;
        this.showcases.eqDateRange.showcase.componentSelector = EqDateRangeComponent;
    }

    get showcasesKeys(): string[] {
        return Object.keys(this.showcases);
    }
}
