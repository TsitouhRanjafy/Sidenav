import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidenavComponent,
    BodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'menu';


  isSidenavCollpsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSidenavCollpsed = data.collapsed;
  }
}
