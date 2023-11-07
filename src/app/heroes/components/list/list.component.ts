import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  heroesName: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America' ];
  isHeroDeleted: boolean = false;

  removeLastHeroe() {
    // this.heroesName.length = this.heroesName.length - 1;
    this.heroesName.pop();
    this.isHeroDeleted = true;
  }

}
