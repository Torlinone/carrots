import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDetailsComponent } from './navbar-details.component';

describe('NavbarDetailsComponent', () => {
  let component: NavbarDetailsComponent;
  let fixture: ComponentFixture<NavbarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
