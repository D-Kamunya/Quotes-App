import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAppDisplayComponent } from './quotes-app-display.component';

describe('QuotesAppDisplayComponent', () => {
  let component: QuotesAppDisplayComponent;
  let fixture: ComponentFixture<QuotesAppDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesAppDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAppDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
