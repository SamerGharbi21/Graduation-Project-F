import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { MessageTemplate } from '../message-template/message-template/message-template.component';
import { CommonModule, DatePipe } from '@angular/common';
import { Inference } from '../../../models/inference.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InferenceService } from '../../../services/inference.service';
import { User } from '../../../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { ToastService } from '../../../services/toast-service.component';
import { AiMessageTemplate } from '../message-template/message-template/ai-message-template.component';
import { TooltipModule } from 'primeng/tooltip';
import { HistorySidebar } from '../../../components/history-sidebar/history-sidebar/history-sidebar.component';


@Component({
  selector: 'chat-page',
  standalone: true,
  imports: [InputGroupModule, ButtonModule, FloatLabelModule, FormsModule, MessageTemplate, InputTextModule, AiMessageTemplate, TooltipModule, HistorySidebar ,CommonModule],
  templateUrl: './chat-page.component.html'
  })
export class ChatPage implements OnDestroy, OnInit{
date = new DatePipe('en-US').transform(new Date(),'hh-mm')!;
infrence: Inference | null = null;
text: string | null = null;
user: Observable<User | null>;
@ViewChild('aiForm') aiForm!: NgForm; // ViewChild reference to the form

constructor(private inferenceService: InferenceService, private userService: UserService, private toastService: ToastService ){
  this.user = userService.getUser();
  
}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    // this.subscription.add(
    //   this.userService.getUser().subscribe({
    //     next: (user) => this.user = user,
    //     error: (error) => console.error('There was an error!', error)
    //   })
    // ); 
   }


submit(): void {
  const whenCreated = new Date();
  this.infrence = new Inference(this.text!,whenCreated);  
  console.log(this.text);
  
this.inferenceService.infereAi({query: this.text!, whenCreated: whenCreated}).subscribe({
  next: (value) => {
    
    this.infrence!.id = value.id;
    this.infrence!.response = value.response;
    this.inferenceService.updateInferences([...this.inferenceService.inferences.value!,this.infrence!]);
    this.text = '';
    this.aiForm.reset();
  },
  error: (err) => {
this.toastService.showError({summary: 'Error', detail: err}); 
this.text = '';
this.aiForm.reset()
  },
});
}

setInference(inference : Inference | null): void {
  this.infrence = inference;
}


}
