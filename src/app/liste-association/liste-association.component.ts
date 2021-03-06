import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-association',
  templateUrl: './liste-association.component.html',
  styleUrls: ['./liste-association.component.css']
})
export class ListeAssociationComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  id:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id
      console.log(this.id)
    });
    
    this.getAssociation()
  }

  
  asso:any;
  
  getAssociation(){
    this.http.get('http://localhost:3000/api/admin/getAllAssociations').subscribe(res=>{
     this.asso=res;
      console.log(this.asso)
    
    })
    

  }


  changetype(id:any){
    this.http.post('http://localhost:3000/api/admin/updateAssociationStatus/'+id,{'status':'pending'}).subscribe(res=>{
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
