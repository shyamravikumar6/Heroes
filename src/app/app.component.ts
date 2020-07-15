import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES}  from '../Mheroes';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='myHeroes'
   heroes= HEROES;
   selectedHero:Hero;
   constructor(){}
   ngOnInit(){}

   onSelect(hero:Hero):void {
     this.selectedHero =hero;
   }
}
