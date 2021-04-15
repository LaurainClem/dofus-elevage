import { Component, OnInit } from '@angular/core';
import { FarmingItem } from '../models/farmingItem.model';
import { ObjectsService } from '../services/objects.service';

class Filter {
	label: string;
	active: boolean;
}

@Component({
	selector: 'app-comparateur',
	templateUrl: './comparateur.component.html',
	styleUrls: ['./comparateur.component.scss'],
})
export class ComparateurComponent implements OnInit {
	filters: Filter[] = [
		{ label: 'Tous', active: true },
		{ label: 'Mangeoire', active: false },
		{ label: 'Abreuvoir', active: false },
		{ label: 'Caresseur', active: false },
		{ label: 'Baffeur', active: false },
		{ label: 'Dragofesse', active: false },
		{ label: 'Foudroyeur', active: false },
	];

	constructor(public objectsService: ObjectsService) {}

	ngOnInit() {}

	changeFilter(filter: Filter) {
		this.filters.forEach((flter) => {
			flter.active = filter.label === flter.label ? (flter.active = true) : (flter.active = false);
		});
	}

	add(item: FarmingItem): void {
		item.checked = !item.checked;
	}

	filter(): void {}
}
