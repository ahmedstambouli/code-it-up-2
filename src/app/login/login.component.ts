import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http: HttpClient,private router: Router) { }
  
  ngOnInit(): void {
    
    this.login();
    
  }
  user = {
    email: '',
    password: '',

  }
  data: any = {};
  token: any;
  user2:any
  login(){
    console.log(this.user)
  this.http.post('http://localhost:3000/api/user/login/',this.user,).subscribe(res=>{
    console.log(this.user)
    console.log(res)
    this.data=res
    this.token = this.data.token;
    const headers = new Headers();
    headers.append('Authorization', `jwt ${this.token}`);
    localStorage.setItem('token', 'jwt '+this.token);
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
   if(this.data.user.type=='founder'){
    this.router.navigate(['/homefoundr'])

   }
    

  })
  
  
}


  }


