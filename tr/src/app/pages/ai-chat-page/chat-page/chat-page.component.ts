import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { MessageTemplate } from '../message-template/message-template/message-template.component';
import { DatePipe } from '@angular/common';
import { Inference } from '../../../models/inference';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'chat-page',
  standalone: true,
  imports: [InputGroupModule, ButtonModule, FloatLabelModule, FormsModule, MessageTemplate, InputTextModule],
  templateUrl: './chat-page.component.html'
})
export class ChatPage {
date = new DatePipe('en-US').transform(new Date(),'hh-mm')!;
infrence?: Inference;
value: string|undefined;


}
