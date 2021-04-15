export class FarmingItem {
	type: 'Mangeoire' | 'Abreuvoir' | 'Caresseur' | 'Baffeur' | 'Dragofesse' | 'Foudroyeur';
	label: string;
	efficiency: number;
	utilisations: number;
	checked?: boolean = false;
}
