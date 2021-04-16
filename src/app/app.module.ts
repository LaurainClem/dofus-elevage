import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectComponent } from './comparateur/select/select.component';
import { TopbarComponent } from './topbar/topbar.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ResultsComponent } from './comparateur/results/results.component';

@NgModule({
	declarations: [AppComponent, SelectComponent, TopbarComponent, ResultsComponent],
	entryComponents: [],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
