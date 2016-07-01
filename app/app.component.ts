import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<div (click)="onDeselect()">
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes "
         [class.selected]="hero === selectedHero"
         (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
    </div>
</div>
`
})
export class AppComponent {
    public heroes = HEROES;
    selectedHero:Hero;
    title = 'Tour of Heroes';

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
    onDeselect(){
        // this.selectedHero = null;
    }
}

export class Hero {
    id:number;
    name:string;
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