import { Component, EventEmitter, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrls: ['./dbz-add-character.component.scss']
})
export class DbzAddCharacterComponent {
  character: DBZCharacter = {
    id: '',
    name: ''
  };
  @Output() onNewCharacter: EventEmitter<DBZCharacter> = new EventEmitter<DBZCharacter>();

  emitCharacter() {
    if ( !this.character.name) return;
    this.onNewCharacter.emit( {...this.character, id: window.crypto.randomUUID() } );
    this.character = {
      id: '',
      name: ''
    }
  }

}
