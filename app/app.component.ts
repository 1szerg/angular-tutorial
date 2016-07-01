import {Component, OnInit} from '@angular/core';

import {Hero} from "./hero";
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-app',
    template: `
<h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
    <li *ngFor="let hero of heroes "
     [class.selected]="hero === selectedHero"
     (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
`,
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit{
    ngOnInit():any {
        this.getHeroes();
        return undefined;
    }
    selectedHero:Hero;
    title = 'Tour of Heroes';
    constructor(private heroService: HeroService) { }
    heroes: Hero[];

    onSelect(hero:Hero) {
        if(hero == this.selectedHero){
            this.selectedHero = null;
        }else{
            this.selectedHero = hero;
        }
    }

    getHeroes() {
        this.heroes = this.heroService.getHeroes();
    }
}