import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private router: Router,
    private token: TokenService,
  ) { }

  year: number = new Date().getFullYear();
  loginForm!: FormGroup;

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.router.navigate(['/home']);
    }

    this.loginForm = this.fb.group(
      {
        userName: ["", Validators.required],
        password: ["", Validators.required]
      }
    );
  }


  login() {

    if (this.loginForm.valid) {
      let val = this.loginForm.value;
      // TODO: Validate Login
      this.router.navigate(['/home']);
    }
  }
}