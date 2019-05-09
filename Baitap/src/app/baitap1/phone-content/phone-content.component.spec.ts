import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContentComponent } from './phone-content.component';

describe('PhoneContentComponent', () => {
  let component: PhoneContentComponent;
  let fixture: ComponentFixture<PhoneContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
