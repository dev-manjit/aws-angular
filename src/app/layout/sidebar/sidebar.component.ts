import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AuthComponent } from '../../common/auth/auth.component';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [MatListModule,AuthComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
