import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public applicationName = 'AngularSeed';
  public version = '0.0.0'; // TODO: Get value from
}
