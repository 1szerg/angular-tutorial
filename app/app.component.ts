import {Component} from '@angular/core';
import {Hero} from "./hero";
import { HeroDetailComponent } from './hero-detail.component';

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
    directives: [HeroDetailComponent]
})
export class AppComponent {
    public heroes = HEROES;
    selectedHero:Hero;
    title = 'Tour of Heroes';

    onSelect(hero:Hero) {
        if(hero == this.selectedHero){
            this.selectedHero = null;
        }else{
            this.selectedHero = hero;
        }
    }
}

const HEROES:Hero[] = [
    {id: 1, name: 'Mr. Nice'},
    {id: 2, name: 'Narco'},
    {id: 3, name: 'Bombasto'},
    {id: 4, name: 'Celeritas'},
    {id: 5, name: 'Magneta'},
    {id: 6, name: 'RubberMan'},
    {id: 7, name: 'Dynama'},
    {id: 8, name: 'Dr IQ'},
    {id: 9, name: 'Magma'}
];