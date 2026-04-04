import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSimulator } from './chat-simulator';

describe('ChatSimulator', () => {
  let component: ChatSimulator;
  let fixture: ComponentFixture<ChatSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSimulator],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSimulator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
