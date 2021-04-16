import { Injectable } from '@angular/core';
import { FarmingItem } from '../models/farmingItem.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
	providedIn: 'root',
})
export class FarmingIemsService {
	private _storage: Storage | null = null;

	constructor(private readonly storage: Storage) {
		this.init();
	}

	async init() {
		const storage = await this.storage.create();
		this._storage = storage;
		if (this._storage.get('farmingItem')) {
			this.items = await this._storage.get('farmingItem');
		}
	}

	save(): void {
		this._storage?.set('farmingItem', this.items);
	}

	public items: FarmingItem[] = [
		{
			type: 'Dragofesse',
			label: 'Dragofesse de la Haute Truche',
			efficiency: 7,
			utilisations: 15000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse en Cuir de Sanglacier',
			efficiency: 50,
			utilisations: 7000,
		},
		{
			type: 'Dragofesse',
			label: "Dragofesse de l'Abraknyde Ancestral",
			efficiency: 50,
			utilisations: 12000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse en Cuir de Maho Givrefoux',
			efficiency: 70,
			utilisations: 9000,
		},
		{
			type: 'Dragofesse',
			label: "Dragofesse d'Ombre",
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de Dramak',
			efficiency: 90,
			utilisations: 5000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Tynril',
			efficiency: 70,
			utilisations: 15000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Glourséleste',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Rat Noir',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de XLII',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse en Cuir Noir',
			efficiency: 30,
			utilisations: 5000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Gourlo',
			efficiency: 90,
			utilisations: 5000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du roi Nidas',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Péki Péki',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de Missiz Frizz',
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de Klime',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de Solar',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Kimbo',
			efficiency: 150,
			utilisations: 9000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse du Minotot',
			efficiency: 150,
			utilisations: 5000,
		},
		{
			type: 'Dragofesse',
			label: 'Dragofesse de Grolloum',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Dragofesse',
			label: "Dragofesse d'Ilyzaelle",
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Mangeoire',
			label: "Mangeoire d'El Piko",
			efficiency: 70,
			utilisations: 15000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire de Crocabulia',
			efficiency: 70,
			utilisations: 15000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Maître Pandore',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Kolosso',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire en Bambou Sacré',
			efficiency: 70,
			utilisations: 9000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire de Tengu Givrefoux',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Mangeoire',
			label: "Mangeoire d'Anerice la Shushess",
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Korriandre',
			efficiency: 150,
			utilisations: 9000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire de Sylargh',
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire de Skeunk',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Bworker',
			efficiency: 150,
			utilisations: 9000,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Comte Harebourg',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Mangeoire',
			label: 'Mangeoire du Chalœil',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Merkator',
			efficiency: 110,
			utilisations: 12500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Blop Multicolore Royal',
			efficiency: 70,
			utilisations: 7500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Bethel Akarna',
			efficiency: 110,
			utilisations: 12500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Glourséleste',
			efficiency: 90,
			utilisations: 9000,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Capitaine Ekarlatte',
			efficiency: 120,
			utilisations: 3750,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir en Bambou Sombre',
			efficiency: 30,
			utilisations: 5000,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Sphincter Cell',
			efficiency: 70,
			utilisations: 7500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir en Bambou Sacré',
			efficiency: 70,
			utilisations: 4500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Rasboul Majeur',
			efficiency: 120,
			utilisations: 3750,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Fuji Givrefoux',
			efficiency: 150,
			utilisations: 4500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Minotot',
			efficiency: 90,
			utilisations: 9000,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir en Orme',
			efficiency: 50,
			utilisations: 3500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Père Ver',
			efficiency: 150,
			utilisations: 4500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Missiz Frizz',
			efficiency: 200,
			utilisations: 6250,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir du Kimbo',
			efficiency: 150,
			utilisations: 4500,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Meno',
			efficiency: 200,
			utilisations: 6250,
		},
		{
			type: 'Abreuvoir',
			label: 'Abreuvoir de Corruption',
			efficiency: 200,
			utilisations: 6250,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Phossile',
			efficiency: 120,
			utilisations: 1500,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Toxoliath',
			efficiency: 90,
			utilisations: 3600,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur en Bambou Sombre',
			efficiency: 30,
			utilisations: 5000,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Rat Blanc',
			efficiency: 120,
			utilisations: 1500,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Kanigroula',
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Minotoror',
			efficiency: 70,
			utilisations: 3000,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Kralamoure Géant',
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Mansot Royal',
			efficiency: 70,
			utilisations: 3000,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur en Bambou Sacré',
			efficiency: 70,
			utilisations: 1800,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Nileza',
			efficiency: 110,
			utilisations: 5000,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Korriandre',
			efficiency: 90,
			utilisations: 3600,
		},
		{
			type: 'Baffeur',
			label: "Baffeur d'Ougah",
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Sylargh',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Guerre',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur du Bworker',
			efficiency: 90,
			utilisations: 3600,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Dantinéa',
			efficiency: 110,
			utilisations: 5000,
		},
		{
			type: 'Baffeur',
			label: 'Baffeur de Vortex',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Pounicheur',
			efficiency: 70,
			utilisations: 15000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Ben le Ripate',
			efficiency: 70,
			utilisations: 15000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Chêne Mou',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Comte Razof',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Kolosso',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Maître Corbac',
			efficiency: 120,
			utilisations: 7500,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur en Bambou Sacré',
			efficiency: 70,
			utilisations: 9000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur en Bambou Sombre',
			efficiency: 50,
			utilisations: 5000,
		},
		{
			type: 'Foudroyeur',
			label: "Foudroyeur de l'Obsidiantre",
			efficiency: 150,
			utilisations: 9000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Tengu Givrefoux',
			efficiency: 150,
			utilisations: 9000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Dazak Martegel',
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Klime',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Grolloum',
			efficiency: 90,
			utilisations: 18000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Servitude',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Comte Harebourg',
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur de Larve de Koutoulou',
			efficiency: 110,
			utilisations: 25000,
		},
		{
			type: 'Foudroyeur',
			label: 'Foudroyeur du Protozorreur',
			efficiency: 200,
			utilisations: 12500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Fraktale',
			efficiency: 120,
			utilisations: 1500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur du Royalmouth',
			efficiency: 120,
			utilisations: 1500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur du Tanukouï San',
			efficiency: 70,
			utilisations: 3000,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur du Tofu Royal',
			efficiency: 70,
			utilisations: 3000,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de la Reine des Voleurs',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Merkator',
			efficiency: 110,
			utilisations: 5000,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Fuji Givrefoux',
			efficiency: 90,
			utilisations: 3600,
		},
		{
			type: 'Caresseur',
			label: "Caresseur de l'Obsidiantre",
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Nileza',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Tengu Givrefoux',
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Ush',
			efficiency: 150,
			utilisations: 1800,
		},
		{
			type: 'Caresseur',
			label: "Caresseur d'Ougah",
			efficiency: 90,
			utilisations: 3600,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Torkélonia',
			efficiency: 200,
			utilisations: 2500,
		},
		{
			type: 'Caresseur',
			label: 'Caresseur de Tal Kasha',
			efficiency: 110,
			utilisations: 5000,
		},
	];
}
