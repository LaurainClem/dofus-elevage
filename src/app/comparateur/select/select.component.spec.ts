import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComparateurComponent } from './select.component';

describe('ComparateurComponent', () => {
	let component: ComparateurComponent;
	let fixture: ComponentFixture<ComparateurComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ComparateurComponent],
				imports: [IonicModule.forRoot()],
			}).compileComponents();

			fixture = TestBed.createComponent(ComparateurComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		}),
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
