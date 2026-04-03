import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interval } from './interval';

describe('Interval', () => {
  let component: Interval;
  let fixture: ComponentFixture<Interval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interval],
    }).compileComponents();

    fixture = TestBed.createComponent(Interval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
