import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fizz-Buzz';
  number = 0
  array = Array()

  fizzBuzz() {
    for (let i = 1; i <= this.number; i++) {
      if (i % 3 == 0 && i % 5 == 0) { this.array.push('FizzBuzz') }
      else if (i % 3 == 0) { this.array.push('Fizz') }
      else if (i % 5 == 0) { this.array.push('Buzz') }
      else { this.array.push(''+i) }
    }
    this.number
  }

}
