import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  /* login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["home"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  } */

  login() {
    console.log(this.loginForm.value)
    this.http.get<any>("http://localhost:3000/signupUsersList")
      .subscribe({
        next: (res) => {
          const user = res.find((a: any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
          });
          if (user) {
            alert('Login Successful');
            this.loginForm.reset();
            this.router.navigate(["home"]);
          } else {
            alert("User not found");
          }
        },
        error: (err) => {
          alert("Something went wrong");
        }
      });
  }

}
