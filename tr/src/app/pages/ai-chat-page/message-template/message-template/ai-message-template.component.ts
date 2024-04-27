import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { NamePipe } from '../../../../pipes/name.pipe';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'ai-message-template',
  templateUrl: './ai-message-template.component.html',
  standalone: true,
  imports: [PanelModule, AvatarModule, ButtonModule, MenuModule, NamePipe, DatePipe, CommonModule]
})
export class AiMessageTemplate {

@Input() response!: string;

}