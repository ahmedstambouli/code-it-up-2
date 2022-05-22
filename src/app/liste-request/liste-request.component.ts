import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-request',
  templateUrl: './liste-request.component.html',
  styleUrls: ['./liste-request.component.css']
})
export class ListeRequestComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getRequest()
    
  }


  asso:any
  assoR=[]
  getRequest(){
    this.http.get('http://localhost:3000/api/admin/getAllAssociations').subscribe(res=>{
      this.asso=res;
       console.log(this.asso)
         
     })
  }
  assoac:{
    status:'accepted'
  }

  changetype(id:any){
    this.http.post('http://localhost:3000/api/admin/updateAssociationStatus/'+id,{'status':'accepted'}).subscribe(res=>{
      this.asso=res;
       console.log(this.asso)
         
     })
  }

  changetype2(id:any){
    this.http.post('http://localhost:3000/api/admin/updateAssociationStatus/'+id,{'status':'blocked'}).subscribe(res=>{
      this.asso=res;
       console.log(this.asso)
         
     })
    

  }

}
