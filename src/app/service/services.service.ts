import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router: Router, private http: HttpClient) { }

  checkToken(token: any) {
    if (token == undefined) {
      this.router.navigate((['/Login']))
    }
  }
}
