import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {
  @Output() onRemoveCharacter: EventEmitter<DBZCharacter> = new EventEmitter();
  // If Input decorator receives a parameter we can expose the input data with that name
  @Input() characters: DBZCharacter[] = [];

  removeCharacter(character: DBZCharacter) {
    this.onRemoveCharacter.emit( character );
  }
}
