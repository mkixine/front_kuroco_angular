import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser = this.currentUserSubject.asObservable();

  storeUser(user: any) {
    this.currentUserSubject.next(user);
  }

  logout(): Promise<null> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(null), 500); // 仮の非同期処理
    });
  }
}
