import { Component, OnInit } from '@angular/core';
import { CHAMPIONS } from '../mock-champions';
import { Champion } from '../champion';
import { ChampionServiceService } from '../champion-service.service';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions?: Champion[];

  selectedChampion?: Champion;

  constructor(private championService: ChampionServiceService) { 
  };

  getChampions():void {
    this.champions = this.championService.getChampions();

  }
  ngOnInit(): void {
    this.getChampions()
  }

  onSelect(champion:Champion): void{
    this.selectedChampion = champion;
  }

}
