import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmingItem } from '../../models/farmingItem.model';
import { FarmingIemsService } from '../../services/farmingItems.services';

class Filter {
	label: 'Tous' | 'Mangeoire' | 'Abreuvoir' | 'Caresseur' | 'Baffeur' | 'Dragofesse' | 'Foudroyeur';
	active: boolean;
}

@Component({
	selector: 'app-comparateur',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
	filters: Filter[] = [
		{ label: 'Tous', active: true },
		{ label: 'Mangeoire', active: false },
		{ label: 'Abreuvoir', active: false },
		{ label: 'Caresseur', active: false },
		{ label: 'Baffeur', active: false },
		{ label: 'Dragofesse', active: false },
		{ label: 'Foudroyeur', active: false },
	];

	searchedItem: string;

	constructor(public farmingItemsService: FarmingIemsService, private readonly router: Router) {}

	ngOnInit() {}

	changeFilter(filter: Filter) {
		this.filters.forEach((flter) => {
			flter.active = filter.label === flter.label ? (flter.active = true) : (flter.active = false);
		});
	}

	add(item: FarmingItem): void {
		item.checked = !item.checked;
		this.farmingItemsService.save();
	}

	getFilteredList(): FarmingItem[] {
		if (this.searchedItem && this.searchedItem !== '') {
			return this.getFilteredListByName();
		} else {
			return this.getFilteredListByTag();
		}
	}

	getFilteredListByName(): FarmingItem[] {
		this.changeFilter(this.filters[0]);

		return this.farmingItemsService.items.filter((item) =>
			item.label.toLowerCase().startsWith(this.searchedItem.toLowerCase()),
		);
	}

	getFilteredListByTag(): FarmingItem[] {
		const filterSelected = this.filters.find((filter) => filter.active === true);
		if (filterSelected.label === 'Tous') {
			return this.farmingItemsService.items;
		}

		const farmingItemsFiltered = [];
		this.farmingItemsService.items.forEach((item) => {
			if (item.type === filterSelected.label) {
				farmingItemsFiltered.push(item);
			}
		});

		return farmingItemsFiltered;
	}

	updateSearchedItem(event) {
		this.searchedItem = event.detail.value;
	}

	goToResult(): void {
		this.router.navigate(['comparateur', 'results']);
	}
}
