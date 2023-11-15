import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponentComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-project';
  firstName = 'Agnes';
  defaultVal = 'HEHEHE';
  formValue = '';
  isBtnDisabled = false;

  checkForm() {
    if (this.formValue === 'submitted') {
      this.isBtnDisabled = true;
    }
  }
  passValueToComponent(e) {
    console.log(e.target.value);
  }

  changeValue(e) {
    console.log(e.target.event);
  }
}
