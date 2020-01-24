import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  selectedDate: string;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.selectedDate = value;
  }
}
