import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl}  from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string ="";
  password : string ="";
  show: boolean= false;
  login = new FormControl("");
  ngOnInit(): void {
  }
  constructor(private router: Router) { 
    
  }

  btnClick=  () => {
    if(this.email !== "" && this.password !=null && this.password !== "" && this.password !== null)
    {
      if(this.email==="admin" && this.password==="123")
      {
        this.router.navigateByUrl('/admin');
      }
      else if(this.email==="user" && this.password==="123")
      {
        this.router.navigateByUrl('/dashboard');
      }
      else
      {
        this.router.navigateByUrl('/registration');
      }
    }
    
};
}
