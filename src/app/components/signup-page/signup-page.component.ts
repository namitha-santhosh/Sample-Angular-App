import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    //this.getUser().subscribe(data=> {console.log(data)})
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsersList",this.signUpForm.value)
    .subscribe(
      data => {
        console.log('POST Request is successful ', data);
        alert('Sign Up Successful')
        this.signUpForm.reset();
        this.router.navigate(["login"]);
      },
      error => {
        console.log('Error', error);
        alert("Something went wrong")
      }
    );
  } 

  /* getUser(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos/1"
    return this.http.get(url);
  } */

  /* signUp() {
    console.log(this.signUpForm.value);
    this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
      .subscribe({
        next: (res) => {
          alert('Sign Up Successful');
          this.signUpForm.reset();
          this.router.navigate(["login"]);
        },
        error: (err) => {
          alert("Something went wrong");
        }
      });
  } */
}
