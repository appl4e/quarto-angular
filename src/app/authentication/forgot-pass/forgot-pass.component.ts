import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  forgotForm = this.fb.group({
    email: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private Router:Router) { }

  onSubmit(){
    console.log(this.forgotForm.value);
    this.Router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
