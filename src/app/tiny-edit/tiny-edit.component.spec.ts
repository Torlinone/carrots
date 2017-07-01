import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyEditComponent } from './tiny-edit.component';

describe('TinyEditComponent', () => {
  let component: TinyEditComponent;
  let fixture: ComponentFixture<TinyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
