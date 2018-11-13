import { HostListener } from "@angular/core";

export class WindowResizeTrackerClass {
	width: number;

	constructor() {
		this.width = window.screen.width;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.width = event.target.innerWidth;
	}
}
