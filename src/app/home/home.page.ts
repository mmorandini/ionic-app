import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'ciao ciao';

  constructor() {}

  onChangeText() {
    this.text === 'Text!' ? this.text = 'ciao ciao' : this.text = 'Text!';
  }

}
