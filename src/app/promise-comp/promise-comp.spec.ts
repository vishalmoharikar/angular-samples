import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseComp } from './promise-comp';

describe('PromiseComp', () => {
  let component: PromiseComp;
  let fixture: ComponentFixture<PromiseComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PromiseComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
