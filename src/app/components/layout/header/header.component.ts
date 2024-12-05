import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@/app/services/user.service'; // 仮のユーザーサービス
import { Search } from '@/app/components/ui/search/search.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common'; // 追加

@Component({
  selector: 'app-header',
  imports: [Search, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isTopPage: boolean = false;
  scrollY: number = 0;
  isNavToggleActive: boolean = false;
  user: any = null;
  loading: boolean = true;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    // Check if the current route is the top page
    this.isTopPage = this.router.url === '/';
    this.userService.currentUser.subscribe((user) => {
      this.user = user;
      this.loading = false;
    });

    // Set up scroll listener
    this.handleScroll();
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    this.scrollY = window.scrollY;
  }

  handleNavToggleClick() {
    this.isNavToggleActive = !this.isNavToggleActive;
  }

  handleNavClose() {
    if (this.isNavToggleActive) {
      this.isNavToggleActive = false;
    }
  }

  async handleLogout(event: Event) {
    event.preventDefault();
    const user = await this.userService.logout();
    this.userService.storeUser(null);
    if (!user) {
      this.router.navigate(['/']);
    }
  }
}
