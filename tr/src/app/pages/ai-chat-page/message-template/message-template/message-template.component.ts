import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { InferenceService } from '../../../../services/inference.service';
import { Inference } from '../../../../models/inference.model';
import { NamePipe } from '../../../../pipes/name.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'message-template',
  templateUrl: './message-template.component.html',
  standalone: true,
  imports: [PanelModule, AvatarModule, ButtonModule, MenuModule, NamePipe, DatePipe]
})
export class MessageTemplate implements OnInit
{
  inference: Inference | null = null;
  user: User | null = null;
// private subscription: Subscription = new Subscription();
items: { label?: string; icon?: string; separator?: boolean }[] = [];
constructor(private inferenceService: InferenceService, private userService: UserService){}
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
  ngOnInit(): void {
  //   this.subscription.add(
  //     this.userService.getUser().subscribe({
  //       next: (user) => this.user = user,
  //       error: (error) => console.error('There was an error!', error)
  //     })
  //   ); 
  this.inferenceService.getInferences().subscribe({
    next: value => {
      console.log(value);
      
      this.inference = value[0];
    },
    error: err => {
      console.log(err);
      
    },
  });

this.userService.getUser().subscribe({
  next: (value) => {
    this.user=value;
  },
})

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



// pfp: string = this.userService.getFetchedUser(); //image
@Input() message!: string;
// name: string = this.userService.getFetchedUser().firstName;
@Input() whenCreated!: string;
}
