import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  currentTest = 'Done';
  recentSearch = [''];

  newSerch(newSearch: string) {
    this.recentSearch.push(newSearch);
  }
}
