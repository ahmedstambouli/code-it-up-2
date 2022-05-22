import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-homefounder',
  templateUrl: './homefounder.component.html',
  styleUrls: ['./homefounder.component.css']
})
export class HomefounderComponent implements OnInit {

  constructor(private service: ServicesService) { }
  token :any;
  data :any;
  user :any;
  
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.service.checkToken(this.token)
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
  }

}
