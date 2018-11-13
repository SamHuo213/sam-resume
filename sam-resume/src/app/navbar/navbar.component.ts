import { Component } from '@angular/core';
import { WindowResizeTrackerClass } from '../helpers/window-resize-tracker.class';
import { SmallScreen } from '../constants/small-screen.constant';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends WindowResizeTrackerClass {
	smallScreen = SmallScreen;
}
