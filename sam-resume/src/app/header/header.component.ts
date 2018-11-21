import { Component } from '@angular/core';
import { SmallScreen } from '../constants/small-screen.constant';
import { WindowResizeTrackerClass } from '../helpers/window-resize-tracker.class';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends WindowResizeTrackerClass {
	smallScreen = SmallScreen;
}
