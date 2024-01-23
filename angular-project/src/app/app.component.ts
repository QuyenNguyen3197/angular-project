import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  showTestOne: boolean = false;
  showTestTwo: boolean = false;

  handleShowTestOne(){
    this.showTestOne = true;
  }

  handleShowTestTwo(){
    this.showTestTwo = true;
  }
}
