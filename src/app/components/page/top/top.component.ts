import { Component } from '@angular/core';
import { Hero } from '../../section/top/hero/hero.component';
import { Ranking } from '../../common/ranking/ranking.component';
import { CardList } from '../../ui/card-list/card-list.component';
import { HtmlPartsComponent } from '../../common/html-parts/html-parts.component';

@Component({
  selector: 'app-top',
  imports: [Hero, Ranking, CardList, HtmlPartsComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  list = [];
}
