import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkDropdownOptionComponent } from './ak-dropdown-option.component';

describe('AkDropdownOptionComponent', () => {
  let component: AkDropdownOptionComponent;
  let fixture: ComponentFixture<AkDropdownOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkDropdownOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkDropdownOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
