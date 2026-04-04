import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotForm } from './chatbot-form';

describe('ChatbotForm', () => {
  let component: ChatbotForm;
  let fixture: ComponentFixture<ChatbotForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
