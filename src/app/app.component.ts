
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstrom'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magenta'),
    new Hero(4, 'Tornado')
  ];
  myHero = this.heroes[0];
}

