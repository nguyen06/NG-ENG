import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IReadingComponent } from './i-reading.component';

describe('IReadingComponent', () => {
  let component: IReadingComponent;
  let fixture: ComponentFixture<IReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
