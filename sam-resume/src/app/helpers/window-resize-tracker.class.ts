import { HostListener } from '@angular/core';

export class WindowResizeTrackerClass {
	width: number;

	constructor() {
		this.width = window.innerWidth;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.width = event.target.innerWidth;
	}
}
