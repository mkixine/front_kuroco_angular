import { Component } from '@angular/core';
import { Hero } from '@/app/components/section/top/hero/hero.component';
import { Ranking } from '@/app/components/common/ranking/ranking.component';
import { CardList } from '@/app/components/ui/card-list/card-list.component';
import { HtmlPartsComponent } from '@/app/components/common/html-parts/html-parts.component';

@Component({
  selector: 'app-top',
  imports: [Hero, Ranking, CardList, HtmlPartsComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  list = [];
}
