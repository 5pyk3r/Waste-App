import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWasteComponent } from './create-waste.component';

describe('CreateWasteComponent', () => {
  let component: CreateWasteComponent;
  let fixture: ComponentFixture<CreateWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
