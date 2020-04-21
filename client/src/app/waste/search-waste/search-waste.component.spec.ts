import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWasteComponent } from './search-waste.component';

describe('SearchWasteComponent', () => {
  let component: SearchWasteComponent;
  let fixture: ComponentFixture<SearchWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
