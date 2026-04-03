import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxOperatorsDemo } from './rx-operators-demo';

describe('RxOperatorsDemo', () => {
  let component: RxOperatorsDemo;
  let fixture: ComponentFixture<RxOperatorsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxOperatorsDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RxOperatorsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
