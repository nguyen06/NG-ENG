import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenseDetailsComponent } from './tense-details.component';

describe('TenseDetailsComponent', () => {
  let component: TenseDetailsComponent;
  let fixture: ComponentFixture<TenseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
