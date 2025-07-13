import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginComponent } from '../user/user-login/user-login.component';



@Component({
  standalone: true,
  selector: 'menuheader',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuHeader {
  menuOpen = false;

  constructor(private dialog:MatDialog) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

 /* User dialog management*/
  openUserDialog(): void {
      this.dialog.open(UserLoginComponent);
    }
    
}
