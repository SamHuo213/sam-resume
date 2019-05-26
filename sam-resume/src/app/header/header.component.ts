import { Component } from '@angular/core';
import { SmallScreen } from '../constants/small-screen.constant';
import { WindowResizeTrackerClass } from '../helpers/window-resize-tracker.class';
import { saveAs } from 'file-saver';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends WindowResizeTrackerClass {
	smallScreen = SmallScreen;

	fileName = 'SamResume.pdf';
	filePath = `assets/${this.fileName}`;

	exportResume() {
		saveAs(this.filePath, this.fileName);
	}
}
