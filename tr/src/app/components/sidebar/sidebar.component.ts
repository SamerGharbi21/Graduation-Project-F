import { Component, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';

@Component({
  standalone:true,
  imports: [ButtonModule, SidebarModule, AvatarModule, DialogModule],
    selector: 'sidebar',
    templateUrl: './sidebar.component.html', 
})
export class LeftSidebar {
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;
    sidebarVisible: boolean = false;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

}