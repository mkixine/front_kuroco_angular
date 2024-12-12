import { Component, OnChanges, Input } from '@angular/core';
import { ApiService } from '@/app/services/kuroco-static-api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-html-parts',
  imports: [AsyncPipe],
  templateUrl: './html-parts.component.html',
  styleUrl: './html-parts.component.scss',
})
export class HtmlPartsComponent implements OnChanges {
  @Input() slug: string = '';
  htmlContent: string | null = null; // APIから取得したHTMLコンテンツ

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    if (this.slug) {
      this.apiService.getHtml(this.slug).then((html) => {
        this.htmlContent = html;
      });
    }
  }
}
