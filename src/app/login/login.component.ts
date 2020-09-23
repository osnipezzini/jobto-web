import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login(this.form.value)
  }
}
