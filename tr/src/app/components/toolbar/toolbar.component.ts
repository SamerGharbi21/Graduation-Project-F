import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NamePipe } from '../../pipes/name.pipe';
import { Observable } from 'rxjs';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
  standalone: true,
  imports: [ AvatarModule, NamePipe, ToolbarModule, ButtonModule, RippleModule ],
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
})
export class TopToolbar {
  user: Observable<User | null>;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
 




}
