import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscriuser',
  templateUrl: './inscriuser.component.html',
  styleUrls: ['./inscriuser.component.css']
})
export class InscriuserComponent implements OnInit {

  constructor(private http: HttpClient) { }



form:FormGroup
  ngOnInit(): void {

this.adduser()

    this.form=new FormGroup({
      lastName: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password:new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      type: new FormControl('admin'),
    })
  }

adduser(){
  const formData = new FormData();
  formData.append('lastName',this.form.value.lastName)
  formData.append('firstName',this.form.value.firstName)
  formData.append('phone',this.form.value.phone)
  formData.append('email',this.form.value.email)
  formData.append('password',this.form.value.password)
  formData.append('password',this.form.value.cin)
  formData.append('password',this.form.value.adresse)

  this.http.post('http://localhost:3000/api/user/register/registerUser',this.form.value).subscribe(res=>{
    console.log(res)
  })

}


}
