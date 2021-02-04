import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public signupInvalid: boolean;
  private returnUrl: string;
  httpError: string;
  constructor(
     private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

    onSubmit() {
  const body = {
    username: this.form.get('username').value,
    password1: this.form.get('password1').value,
    password2: this.form.get('password2').value,
    email: this.form.get('email').value
  };

  this.authService.registerUser(body).subscribe(res => {
    // @ts-ignore
    localStorage.setItem('token', res.key);
    this.router.navigate(['/']);
    }, err => {
    const {error} = err;

    this.httpError = error.non_field_errors[0];
  });
  }


}
