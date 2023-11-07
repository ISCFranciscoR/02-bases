import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { DbzListComponent } from './components/list/dbz-list.component';
import { DbzAddCharacterComponent } from './components/add-character/dbz-add-character.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzAddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgHeroiconsModule,
    HttpClientModule
  ],
  exports: [MainPageComponent],
})
export class DbzModule { }
