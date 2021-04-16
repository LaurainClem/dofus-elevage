import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsComponent } from './results.component';

describe('ResutsComponent', () => {
	let component: ResutsComponent;
	let fixture: ComponentFixture<ResutsComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [ResutsComponent],
				imports: [IonicModule.forRoot()],
			}).compileComponents();

			fixture = TestBed.createComponent(ResutsComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		}),
	);

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
