
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-severity-demo',
    template: './toast-severity-demo.html',
    providers: [MessageService]
})
export class ToastService {
    constructor(private messageService: MessageService) {}

    showSuccess(info: {summary: string, detail: string}) {
        this.messageService.add({ severity: 'success', summary: info.summary, detail: info.detail });
    }

    showInfo(info:{summary: string, detail: string}) {
        this.messageService.add({ severity: 'info', summary: info.summary, detail: info.detail });
    }

    showWarn(info: {summary: string, detail: string}) {
        this.messageService.add({ severity: 'warn', summary: info.summary, detail: info.detail });
    }

    showError(info: {summary: string, detail: string}) {
        this.messageService.add({ severity: 'error', summary: info.summary, detail: info.detail });
    }
}