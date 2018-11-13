import { Component } from '@angular/core';
import { WindowResizeTrackerClass } from './helpers/window-resize-tracker.class';
import { SmallScreen } from './constants/small-screen.constant';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends WindowResizeTrackerClass {
	smallScreen = SmallScreen;
}
