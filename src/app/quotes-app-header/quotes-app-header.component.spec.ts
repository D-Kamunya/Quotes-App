import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAppHeaderComponent } from './quotes-app-header.component';

describe('QuotesAppHeaderComponent', () => {
  let component: QuotesAppHeaderComponent;
  let fixture: ComponentFixture<QuotesAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
