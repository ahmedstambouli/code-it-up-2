import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-owner',
  templateUrl: './side-owner.component.html',
  styleUrls: ['./side-owner.component.css']
})
export class SideOwnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login'])
  }
  public check =true
  public toggle(){
    if(this.check==true){
      this.check=false
    }
    else{
      this.check=true
    }
    
  }
}
