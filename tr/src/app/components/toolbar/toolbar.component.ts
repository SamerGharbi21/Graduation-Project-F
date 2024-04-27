import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NamePipe } from '../../pipes/name.pipe';
import { Observable } from 'rxjs';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/authentication.service';


@Component({
  standalone: true,
  imports: [ AvatarModule, NamePipe, ToolbarModule, ButtonModule, CommonModule, MenuModule ],
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styles: `
  .avatar-container {
  position: relative;
  cursor: pointer;
}

.avatar-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
`
})
export class TopToolbar {
  user: Observable<User | null>;
  @ViewChild('menu') menu!: Menu;
  @ViewChild('menuButton') menuButton!: ElementRef;
  menuVisible: boolean = false;
  menuItems: MenuItem[] = [{label: 'profile', icon: 'pi pi-user'},{label: 'Logout', icon: 'pi pi-sign-out', command: (e) => {
     this.authenticationService.logout();
  },} ];
  constructor(private userService: UserService, private router: Router, private authenticationService: AuthService) {
    this.user = this.userService.getUser();
    
  }
 

navigate(route: string): void {
this.router.navigateByUrl(route);
}

toggleMenu(event: Event): void{
this.menu.toggle(event);
// if (this.menu.visible) {
//   // setTimeout(() => this.menuButton.nativeElement.focus());
// }
}
}
