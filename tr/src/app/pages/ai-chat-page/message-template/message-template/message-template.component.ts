import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'message-template',
  templateUrl: './message-template.component.html',
  standalone: true,
  imports: [PanelModule, AvatarModule, ButtonModule, MenuModule]
})
export class MessageTemplate implements OnInit{
  ngOnInit(): void {
    this.items = [
       {
        label: 'Mark as correct',
        icon: 'pi pi-check'
       },
        {
            separator: true
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        }
    ];
}
items: { label?: string; icon?: string; separator?: boolean }[] = [];


@Input() pfp!: string; //image
@Input() message!: string;
@Input() name!: string;
@Input() whenCreated!: string;
}
