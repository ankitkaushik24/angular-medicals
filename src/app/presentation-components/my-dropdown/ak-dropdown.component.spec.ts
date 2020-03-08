import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkDropdownComponent } from './ak-dropdown.component';

describe('AkDropdownComponent', () => {
  let component: AkDropdownComponent;
  let fixture: ComponentFixture<AkDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
