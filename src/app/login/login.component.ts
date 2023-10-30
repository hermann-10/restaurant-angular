import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log('email: ', this.loginForm.value.email);
    console.log('password: ', this.loginForm.value.password);
 
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=> {

        const user = res.find((a:any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password  
        }) 

          console.log('res.email: ', res.email);
          console.log('res.password: ', res.password);
          console.log('user:', user);

        if (user) {

  
          this.toast.success({ detail: 'Success Message', summary: ' User login Successfull', duration:9000});
          this.loginForm.reset();
          //this.router.navigate(['dashboard']);
          this.router.navigate(['restaurant']);
          
          localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

          this.loginForm.value.email? localStorage.setItem('usertype', 'employee'):''
        } else {
          //alert('User not found with these credentials');  
           this.toast.error({
             detail: 'Error Message',
             summary: 'User not found with these credentials',
             duration:8000
           });
        }
      }
      ,err => {
        //alert('Something Went Wrong');

          this.toast.error({
            detail: 'Error Message',
            summary: 'something went wrong',
            duration:8000
          });
      }
    )
  }
}
