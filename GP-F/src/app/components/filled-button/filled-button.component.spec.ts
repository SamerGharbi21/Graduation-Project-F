import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButton } from './filled-button.component';

describe('FilledButtonComponent', () => {
  let component: FilledButton;
  let fixture: ComponentFixture<FilledButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilledButton]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilledButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
