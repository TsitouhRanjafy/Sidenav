import { style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screeenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screeenWidth > 768) {
      styleClass = 'body-trimed';
    } else if (this.collapsed && this.screeenWidth < 768 && this.screeenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
