import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { InferenceService } from '../../../../services/inference.service';
import { NamePipe } from '../../../../pipes/name.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { ToastService } from '../../../../services/toast-service.component';

@Component({
  selector: 'message-template',
  templateUrl: './message-template.component.html',
  standalone: true,
  imports: [PanelModule, AvatarModule, ButtonModule, MenuModule, NamePipe, DatePipe, CommonModule]
})
export class MessageTemplate implements OnInit, OnDestroy {
  user!: Observable<User | null>;
  @Input() message!: string;
  @Input() whenCreated!: Date;
  @Input() id!: number;
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter<void>();
  // pfp: string = this.userService.getFetchedUser(); //image
// private subscription: Subscription = new Subscription();
items: MenuItem[] = [];
constructor(private inferenceService: InferenceService, private userService: UserService, private toastService: ToastService){}
  ngOnDestroy(): void {

  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
  ngOnInit(): void {
    this.user = this.userService.getUser();
  //   this.subscription.add(
  //     this.userService.getUser().subscribe({
  //       next: (user) => this.user = user,
  //       error: (error) => console.error('There was an error!', error)
  //     })
  //   ); 
  // this.inferenceService.getInferences().subscribe({
  //   next: value => {
  //     console.log(value);
      
  //     // this.inference = value[0];
  //   },
  //   error: err => {
  //     console.log(err);
      
  //   },
  // });
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
           icon: 'pi pi-trash',
           command: _ => {
             this.inferenceService.deleteInference(this.id).subscribe({
              next: _ => {
                this.inferenceService.removeFromInference(this.id);
                this.deleteClicked.emit();
              },
error: (err) => {
  this.toastService.showError({summary: 'Error', detail: err});
},
             })
           },

       }
   ];
   }



}
