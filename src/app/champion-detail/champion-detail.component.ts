import { Component, OnInit, Input } from '@angular/core';
import { Champion } from '../champion';
import { ChampionsComponent } from '../champions/champions.component';
@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css', '../champions/champions.component.css']
})
export class ChampionDetailComponent implements OnInit {
  @Input() champion?: Champion;
  constructor() { }

  ngOnInit(): void {
  }

  handleSave() {
    this.champion = undefined;
    let editor = document.querySelector(".selected")
    editor?.classList.remove("selected");
  }

}
