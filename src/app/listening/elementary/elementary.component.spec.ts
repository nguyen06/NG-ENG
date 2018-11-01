import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryComponent } from './elementary.component';

describe('ElementaryComponent', () => {
  let component: ElementaryComponent;
  let fixture: ComponentFixture<ElementaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
