import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup
  submitted = false
  message?: string

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, введите данные'
      } else if (params['authFailed']) {
        this.message = 'Сессия истекла. Введите данные заного'
      }
    })

    this.form = new FormGroup({
      email:
        new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
      password:
        new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ])
    })
  }

  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}
