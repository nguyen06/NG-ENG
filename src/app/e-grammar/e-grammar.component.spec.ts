import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EGrammarComponent } from './e-grammar.component';

describe('EGrammarComponent', () => {
  let component: EGrammarComponent;
  let fixture: ComponentFixture<EGrammarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EGrammarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EGrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
