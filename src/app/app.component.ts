import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav'
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ 
    RouterOutlet,
    RouterModule,
    MatSidenavModule, 
    SidebarComponent, 
    HeaderComponent, 
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
@ViewChild('drawer') drawer!: MatDrawer;
//Todo: get call from header menu 
openDrawer() {
  this.drawer.open(); // or toggle(), close()
}
 }
