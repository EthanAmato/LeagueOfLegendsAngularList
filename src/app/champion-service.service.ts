import { Injectable } from '@angular/core';
import { CHAMPIONS } from './mock-champions';
import { Champion } from './champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionServiceService {

  getChampions(): Champion[] {
    return CHAMPIONS;
  }


  constructor() { }
}
