import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'Comparateur', url: '/comparateur', icon: 'speedometer' },
		{ title: 'Work in progress', url: '/', icon: 'construct' },
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
	constructor() {}
}
