import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IReadingMenuComponent } from './i-reading-menu.component';

describe('IReadingMenuComponent', () => {
  let component: IReadingMenuComponent;
  let fixture: ComponentFixture<IReadingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IReadingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IReadingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
