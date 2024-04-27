import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { Inference } from '../../../models/inference.model';
import { InferenceService } from '../../../services/inference.service';
import { Observable } from 'rxjs';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../services/toast-service.component';

@Component({
  selector: 'history-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, DividerModule, CommonModule],
  templateUrl: './history-sidebar.component.html'
})
export class HistorySidebar {
  
  inferences: Inference[] | null = null;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  @Output() historyChat: EventEmitter<Inference | null> = new EventEmitter<Inference | null>();
  sidebarVisible: boolean = false;
  constructor(private inferenceService: InferenceService, private toastService: ToastService){
   inferenceService.getInferences().subscribe({
      next: (value) => {
        this.inferences = value;
      },
      error: (err) => {
        this.toastService.showError({summary: 'Error', detail: err});
      },
    });
  }
  
  setInference(index: number): void {
this.historyChat.emit(this.inferences![index]);
}
newChatPressed() : void {
  this.historyChat.emit(null);
  
}
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
}

}
