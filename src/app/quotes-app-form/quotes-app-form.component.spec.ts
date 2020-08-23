import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAppFormComponent } from './quotes-app-form.component';

describe('QuotesAppFormComponent', () => {
  let component: QuotesAppFormComponent;
  let fixture: ComponentFixture<QuotesAppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesAppFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
