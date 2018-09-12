import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private Router:Router ) { }

  onSubmit() {
    console.log(this.loginForm.value);
    this.Router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
