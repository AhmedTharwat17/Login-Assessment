import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgencyListComponent } from './travel-agency-list.component';

describe('TravelAgencyListComponent', () => {
  let component: TravelAgencyListComponent;
  let fixture: ComponentFixture<TravelAgencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAgencyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
