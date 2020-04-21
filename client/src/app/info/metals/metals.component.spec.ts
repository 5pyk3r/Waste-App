import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalsComponent } from './metals.component';

describe('MetalsComponent', () => {
  let component: MetalsComponent;
  let fixture: ComponentFixture<MetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
