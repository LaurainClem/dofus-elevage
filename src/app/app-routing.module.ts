import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './comparateur/results/results.component';
import { SelectComponent } from './comparateur/select/select.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'comparateur/select',
		pathMatch: 'full',
	},
	{
		path: 'comparateur/select',
		component: SelectComponent,
	},
	{
		path: 'comparateur/results',
		component: ResultsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
