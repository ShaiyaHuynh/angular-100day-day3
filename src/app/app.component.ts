import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular  ' + VERSION.major;
  name1 = '';

  // DATABIDING
  // <input [type]="inputText" [value]="user.name">
  inputText = 'text';

  user = {
    name: 'Quynh',
    age: 35,
  };
  // EVENT BIDING
  Click(event: any) {
    console.log('Click me event handler', event);
  }
}
