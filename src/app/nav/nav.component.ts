import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavComponent implements OnInit {
  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onLogout(): void {
    this.authService.doLogout();
  }

  goToProfile(id: number): void {
    this.router.navigate(['profile/' + id]);
  }
}
