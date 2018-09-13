import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPass: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private Router: Router) { }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.Router.navigateByUrl('/Login');
  }
  ngOnInit() {
  }

}
