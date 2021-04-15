import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
	@Input() title: string;

	constructor(private menu: MenuController) {}

	ngOnInit() {}

	toggleSideMenu(): void {
		this.menu.open();
	}
}
