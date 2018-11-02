import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IReadingDetailComponent } from './i-reading-detail.component';

describe('IReadingComponent', () => {
  let component: IReadingDetailComponent;
  let fixture: ComponentFixture<IReadingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IReadingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IReadingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
