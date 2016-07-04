import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HeroService {

    base_url:string = "http://localhost:57261/api/Heroes/";
    http:Http;

    constructor(http:Http){
        this.http = http;
    }

    getHeroes(heroes, error) {
        this.http.get(this.base_url).subscribe(
            data =>{
                data = JSON.parse(data.text());
                heroes = data;
            },
            err => error
        )
    }
}
