import { Component, Output , EventEmitter} from '@angular/core';
import { navbarData } from './nav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav() : void{
    this.collapsed = false
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
