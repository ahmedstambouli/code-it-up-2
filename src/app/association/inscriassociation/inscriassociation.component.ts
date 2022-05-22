import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscriassociation',
  templateUrl: './inscriassociation.component.html',
  styleUrls: ['./inscriassociation.component.css'],


})
export class InscriassociationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cin: ['', Validators.required],
      adresse: ['', Validators.required],
      type: ['founder', Validators.required],
      association: ['', Validators.required],
      description: ['', Validators.required],
      emailAssociation: ['', Validators.required],
      filename: ['', Validators.required]
    });

  }


  add(){
    const formData = new FormData();
    formData.append('firstName', this.secondFormGroup.value.firstName)
    formData.append('lastName', this.secondFormGroup.value.lastName)
    formData.append('phone', this.secondFormGroup.value.phone)
    formData.append('email', this.secondFormGroup.value.email)
    formData.append('password', this.secondFormGroup.value.password)
    formData.append('cin', this.secondFormGroup.value.cin)
    formData.append('adresse', this.secondFormGroup.value.adresse)
    formData.append('type', this.secondFormGroup.value.type)
    formData.append('association', this.secondFormGroup.value.association)
    formData.append('description', this.secondFormGroup.value.description)
    formData.append('emailAssociation', this.secondFormGroup.value.emailAssociation)
    formData.append('filename', this.secondFormGroup.value.filename)
    
    
    console.log(this.secondFormGroup)
    this.http.post('http://localhost:3000/api/user/register/',this.secondFormGroup.value).subscribe(res=>{
      console.log(res)
    })
    
  }

}


