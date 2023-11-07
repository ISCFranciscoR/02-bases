import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 32;
  isNameChanged: boolean = false;
  isAgeChanged: boolean = false;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Ironwoman';
    this.isNameChanged = true;
  }

  changeAge() {
    this.age = 60;
    this.isAgeChanged = true;
  }

  resetState() {
    this.name = 'ironman';
    this.age = 32;
    this.isAgeChanged = this.isNameChanged = false;
  }

}
