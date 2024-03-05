import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'filled-button',
  standalone: true,
  imports: [ButtonModule],
  template: '<p-button label="Submit"></p-button>',
  styles: ``
})
export class FilledButton {
name !: string;
}
