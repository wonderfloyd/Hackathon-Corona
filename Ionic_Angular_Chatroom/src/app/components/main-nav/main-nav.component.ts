import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  @Input() userName: string;

  constructor(private router: Router, public authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

}
