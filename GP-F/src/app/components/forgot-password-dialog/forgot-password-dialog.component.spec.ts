import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordDialog } from './forgot-password-dialog.component';

describe('ForgotPasswordDialogComponent', () => {
  let component: ForgotPasswordDialog;
  let fixture: ComponentFixture<ForgotPasswordDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasswordDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
