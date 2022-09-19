import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

import { users } from './users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular  ' + VERSION.major;
  users = users;
  name1 = '';
  isDanger = false;
  isWarning = false;
  currentProgress = 50;
  @ViewChild('focusText', { static: true })
  focusText: ElementRef<HTMLTextAreaElement>;

  // DATABIDING
  // <input [type]="inputText" [value]="user.name">
  inputText = 'text';

  user = {
    name: 'Quynh',
    age: 19,
  };
  // EVENT BIDING
  Click(event: any) {
    console.log('Click me event handler', event);
  }
  Classes = '';
  isShow = false;
  Show() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.Classes = 'box red-border yellow-background';
    } else {
      this.Classes = '';
    }
  }
  UpdateProgress() {
    this.currentProgress += 10;
    if (this.currentProgress > 100) {
      this.currentProgress = 10;
    }
  }
  ngOnInit() {
    this.focusText.nativeElement.value = 'test focus';
    this.focusText.nativeElement.focus();
  }
}
