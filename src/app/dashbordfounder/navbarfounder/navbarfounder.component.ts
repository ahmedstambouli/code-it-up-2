import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-navbarfounder',
  templateUrl: './navbarfounder.component.html',
  styleUrls: ['./navbarfounder.component.css']
})
export class NavbarfounderComponent implements OnInit {
  token :any;
  data :any;
  user :any;
  
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.service.checkToken(this.token)
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
  }

}
