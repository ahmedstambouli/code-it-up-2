import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.login();
    
  }
  user = {
    email: '',
    password: '',

  }
  data: any = {};
  token: any;
  login(){
    console.log(this.user)
  this.http.post('http://localhost:3000/api/user/login/',this.user,).subscribe(res=>{
    console.log(this.user)
    console.log(res)
    this.data=res
    this.token = this.data.token;
    const headers = new Headers();
    headers.append('Authorization', `jwt ${this.token}`);
    localStorage.setItem('token', this.token);
    this.token = localStorage.getItem('token');




  })
  
}
  }


