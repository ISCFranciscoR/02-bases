import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule( {
  declarations: [ ListComponent, HeroComponent ],
  imports:[CommonModule],
  exports: [ListComponent, HeroComponent]
} )
export class HeroesModule{}
