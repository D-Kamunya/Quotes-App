import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAppFooterComponent } from './quotes-app-footer.component';

describe('QuotesAppFooterComponent', () => {
  let component: QuotesAppFooterComponent;
  let fixture: ComponentFixture<QuotesAppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesAppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
