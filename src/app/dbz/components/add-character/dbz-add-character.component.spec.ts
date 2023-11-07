import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAddCharacterComponent } from './dbz-add-character.component';

describe('DbzAddCharacterComponent', () => {
  let component: DbzAddCharacterComponent;
  let fixture: ComponentFixture<DbzAddCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzAddCharacterComponent]
    });
    fixture = TestBed.createComponent(DbzAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
