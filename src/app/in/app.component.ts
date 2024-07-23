import { Component, OnInit } from '@angular/core';
import { Showcase } from '../_types/showcaseType';
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
    public showcases: Record<string, Showcase> = {
        eqM2o,
        eqString,
        eqText,
        eqDate,
        eqDateTime,
        eqDateRange,
    };

    public ngOnInit(): void {
        this.showcases.eqM2o.componentSelector = EqM2oComponent;
        this.showcases.eqString.componentSelector = EqStringComponent;
        this.showcases.eqText.componentSelector = EqTextComponent;
        this.showcases.eqDate.componentSelector = EqDateComponent;
        this.showcases.eqDateTime.componentSelector = EqDateTimeComponent;
        this.showcases.eqDateRange.componentSelector = EqDateRangeComponent;
    }

    get showcasesKeys(): string[] {
        return Object.keys(this.showcases);
    }
}
