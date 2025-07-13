import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserLoginComponent } from '../../user/user-login/user-login.component';
@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [CommonModule,MatDialogModule,MatFormFieldModule,MatMenuModule,MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
 isAuthenticated = false; // This should be replaced with actual authentication logic
   constructor(private dialog:MatDialog) {}
 /* User dialog management*/
 openUserDialog(): void {
      this.dialog.open(UserLoginComponent);
    }
}
