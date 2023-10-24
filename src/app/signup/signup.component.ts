import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup() {
    this.http
      .post<any>('http://localhost:3000/signup', this.registerForm.value)
      .subscribe(
        (res) => {
          alert('You are register successfully !');
          this.registerForm.reset(); //Empty the form after submission
          this.router.navigate(['login']);
        },
        (error) => {
          alert('Something went wront!!!');
        }
      );
  }
}
