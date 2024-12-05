import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class Search {
  searchTerm: string = ''; // 検索クエリを保持

  @Output() searchSubmit = new EventEmitter<void>(); // カスタムイベントを定義

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault(); // デフォルトのフォーム送信を無効化
    this.router.navigate(['/article'], {
      queryParams: { search: this.searchTerm },
    });
    this.searchSubmit.emit(); // 親コンポーネントに通知
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }
}
