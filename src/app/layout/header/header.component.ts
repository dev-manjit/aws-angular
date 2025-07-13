import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginComponent } from '../../user/user-login/user-login.component';
import { AuthComponent } from "../../common/auth/auth.component";

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, MatFormFieldModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated = false; // This should be replaced with actual authentication logic
   constructor(private dialog:MatDialog) {}
/* User dialog management*/
 openUserDialog(): void {
      this.dialog.open(UserLoginComponent);
    }
  }