import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ArkSelect } from '@e-square/ark';

import { AuthService } from '../auth/auth.service';
import { SessionStore } from '../auth/session.store';

@Component({
  selector: 'ark-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ArkSelect],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  constructor(private readonly router: Router, private readonly auth: AuthService, readonly session: SessionStore) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
