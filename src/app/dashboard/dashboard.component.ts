import { Component } from '@angular/core';
import { UserRegComponent } from '../user/user-reg/user-reg.component';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon'
import { MenuHeader } from '../menu/menu.component';




@Component({
  standalone: true,
  imports: [CommonModule,UserRegComponent,MatIconModule,MenuHeader],
  selector: 'dashboard',
  templateUrl:'./dashboard.component.html',
})
export class DashboardComponent {
  showUserReg = false;

  openRegistration() {
    this.showUserReg = true;
  }

  closeRegistration() {
    this.showUserReg = false;
  }
}
