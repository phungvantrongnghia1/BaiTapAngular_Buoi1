import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptapContentComponent } from './laptap-content.component';

describe('LaptapContentComponent', () => {
  let component: LaptapContentComponent;
  let fixture: ComponentFixture<LaptapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptapContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
