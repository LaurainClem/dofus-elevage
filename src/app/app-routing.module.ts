import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComparateurComponent } from './comparateur/comparateur.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'comparateur',
		pathMatch: 'full',
	},
	{
		path: 'comparateur',
		component: ComparateurComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
