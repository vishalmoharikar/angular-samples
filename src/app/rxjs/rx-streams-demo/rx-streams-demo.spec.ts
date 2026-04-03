import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStreamsDemo } from './rx-streams-demo';

describe('RxStreamsDemo', () => {
  let component: RxStreamsDemo;
  let fixture: ComponentFixture<RxStreamsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxStreamsDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RxStreamsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
