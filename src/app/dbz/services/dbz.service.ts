import { Injectable } from '@angular/core';
import { DBZCharacter } from '../interfaces/dbz-character';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DBZApiResponse } from '../interfaces/dbz-api-response';

@Injectable({providedIn: 'root'})
export class DBZService{

  characters: DBZCharacter[] = [];

  constructor( private http: HttpClient ) {
    this.getCharacters();
  }

  addCharacter( emitedCharacter: DBZCharacter ) {
    this.characters = [ ...this.characters, emitedCharacter ];
  }

  removeCharacter(character: DBZCharacter) {
    this.characters = this.characters.filter( _character => character.id != _character.id );
  }

  private getCharacters() {
    const API_URL = 'https://back-dragon-ballzs-mwfw-dev.fl0.io/api';
    this.http.get<DBZApiResponse>( API_URL )
      .pipe(
        map((response: DBZApiResponse) => response?.characters)
      )
      .subscribe( {
        next: characters => {
          this.characters = characters;
        }
        ,error: ( error: HttpErrorResponse ) => {
          throw new Error( error.message )
        }
      } );
  }

}
