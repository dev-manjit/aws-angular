import { Component } from '@angular/core';
import { CommonDialogComponent } from '../../common/common-dialog/common-dialog.component';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  imports: [CommonDialogComponent,FormsModule]
})
export class UserLoginComponent {
login() {
  console.log('Logging in...');
  // Add your logic here, e.g., call auth service
}

}
