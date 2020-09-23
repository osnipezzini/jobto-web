import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: any;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
    this.form = this.fb.group({
      username: [''],
      passwordConfirmation: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.authService.register(this.form.value).subscribe((res) => {
      if (res.result) {
        this.form.reset();
        this.router.navigate(['login']);
      }
    });
  }
}
