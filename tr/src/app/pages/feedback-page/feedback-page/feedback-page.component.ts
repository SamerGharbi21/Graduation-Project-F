import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Observable } from 'rxjs';
import { Feedback } from '../../../models/feedback.model';
import { FeedbackService } from '../../../services/feedback.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastService } from '../../../services/toast-service.component';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FeedbackType } from '../../../constants/feedback-type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TopToolbar } from '../../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [AccordionModule, CommonModule, ButtonModule, DialogModule, SelectButtonModule, ScrollPanelModule, ReactiveFormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './feedback-page.component.html',
  // styleUrl: './feedback-page.component.css'
})
export class FeedbackPage {
dialogVisible: boolean = false;
feedbackTypes = [FeedbackType.Financial.toString(),FeedbackType.Suggestion.toString(),FeedbackType.Technical.toString()];
dialogForm: FormGroup = new FormGroup({
  type:new FormControl(FeedbackType.Financial,[Validators.required]),
  complaint: new FormControl('', [Validators.required]),
  whenMade: new FormControl(Date)
});


feedbacks: Observable<Feedback[]>;
constructor(private feedbackService: FeedbackService, private toastService: ToastService){
  this.feedbacks = this.feedbackService.getFeedbacks();
}

removeFeedback(id: number): void {
  this.feedbackService.deleteFeedback(id).subscribe({
    next: _ => {
      this.feedbackService.feedbacks.next(this.feedbackService.feedbacks.value?.filter(feedback => feedback.id !== id)!);
      this.toastService.showSuccess({summary: 'Success', detail: 'Feedback deleted'});
    },
    error: err => {
      this.toastService.showError({summary: 'Error', detail: err});
    },
  });
}

showDialog() {
  this.dialogVisible = true;
}

sendFeedback(): void {
  const feedback: Feedback = new Feedback({complaint: this!.dialogForm!.get('complaint')?.value, whenMade: new Date(), type: this.dialogForm.get('type')?.value});

  this.feedbackService.sendFeedback(feedback).subscribe({
    next: value => {
      feedback.id = value;
      this.feedbackService.feedbacks.next([...this.feedbackService.feedbacks.value!,feedback]);
      this.dialogVisible = false;
      this.toastService.showSuccess({summary: 'Success', detail: 'Feedback received'});
      this.dialogForm.reset()
    },
    error: err => {
      this.toastService.showError({summary: 'Error', detail: err});
    },
  })
}

}
