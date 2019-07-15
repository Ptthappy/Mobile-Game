import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private hp: number,
              private maxDashes: number,
              private dashes: number,
              private score: number) { }

  init() {
    this.hp = 9;
    this.maxDashes = 1;
    this.dashes = 1;
    this.score = 0;
  }
}
