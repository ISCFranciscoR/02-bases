import { DBZCharacter } from './../../interfaces/dbz-character';
import { Component } from '@angular/core';
import { DBZService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor( private dbzService: DBZService ) {
  }

  get characters(): DBZCharacter[] {
    return this.dbzService.characters;
  }

  removeCharacter(character: DBZCharacter) {
    this.dbzService.removeCharacter( character );
  }

  addCharacter(character: DBZCharacter) {
    this.dbzService.addCharacter( character );
  }

}
