import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES}  from '../Mheroes';
import {heroServices} from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
  
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
   ngOnInit(){this.getHeroes();}

   onSelect(hero:Hero):void {
     this.selectedHero =hero;
   }
   getHeroes(): void{
        this.heroes = heroServices.getHeroes()
   }
}
