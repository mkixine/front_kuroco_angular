import { Component } from '@angular/core';
import { Hero } from '../../section/top/hero/hero.component';
import { Ranking } from '../../common/ranking/ranking.component';
import { CardList } from '../../ui/card-list/card-list.component';

@Component({
  selector: 'app-top',
  imports: [Hero, Ranking, CardList],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  list = [];
}
