import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-association',
  templateUrl: './profil-association.component.html',
  styleUrls: ['./profil-association.component.css']
})
export class ProfilAssociationComponent implements OnInit {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  id:any
  token:any
  form:FormGroup
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    
    console.log(this.token);

    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id
      console.log(this.id)
      this.getMembers()
       this.getEvents()
    });
    
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),

    })
  }
  members :any
  m1 :any
 
  getMembers(){


    this.http.get("http://localhost:3000/api/user/members/"+this.id).subscribe(res => {
      console.log(res)
      this.members = res
      this.m1 = this.members.members.members
      console.log(this.m1)
    })


  }
  addEvent(){
    let headers = new HttpHeaders({ 'Authorization': this.token })
    console.log(this.form.value)
    const formData = new FormData();
    formData.append('title', this.form.value.title)
    formData.append('date', this.form.value.date)
    formData.append('description', this.form.value.description)
    formData.append('file', this.form.value.file)
    this.http.post("http://localhost:3000/api/event/event",formData,{ headers: headers }).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
    
  }
  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ file: file });
    this.form.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);


  }
  events:any
  getEvents(){
    this.http.get("http://localhost:3000/api/event/eventByAssociation/"+this.id).subscribe(res => {
      console.log(res)
      this.events = res
    })
  }
}
