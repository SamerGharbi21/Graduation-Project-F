import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { MessageTemplate } from '../message-template/message-template/message-template.component';
import { DatePipe } from '@angular/common';
import { Inference } from '../../../models/inference.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InferenceService } from '../../../services/inference.service';
import { User } from '../../../models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'chat-page',
  standalone: true,
  imports: [InputGroupModule, ButtonModule, FloatLabelModule, FormsModule, MessageTemplate, InputTextModule],
  templateUrl: './chat-page.component.html'
})
export class ChatPage implements OnDestroy, OnInit{
date = new DatePipe('en-US').transform(new Date(),'hh-mm')!;
infrence?: Inference;
value: string = '';
user: User | null = null;
private subscription: Subscription = new Subscription();
constructor(private inferenceService: InferenceService, private userService: UserService){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
      this.userService.getUser().subscribe({
        next: (user) => this.user = user,
        error: (error) => console.error('There was an error!', error)
      })
    ); 
   }

submit(): void {

this.inferenceService.infereAi(this.value?? 'الو').subscribe({
  next(value) {
    
    console.log(value);
    
  },
  error(err) {
    console.log(err);
    
  },
});
}


}
