import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenseDetailComponent } from './tense-detail.component';

describe('TenseDetailComponent', () => {
  let component: TenseDetailComponent;
  let fixture: ComponentFixture<TenseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
