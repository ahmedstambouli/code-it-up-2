import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscriassociation',
  templateUrl: './inscriassociation.component.html',
  styleUrls: ['./inscriassociation.component.css'],


})
export class InscriassociationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      // email: ['', Validators.required, Validators.email],
      // Name: ['', Validators.required],
      // Location: ['', Validators.required],
      // phonenumber: ['', Validators.required],
      // dateC: ['', Validators.required],
      // phoneN: ['', Validators.required],
      // Logo: ['', Validators.required],
      // Password: ['', Validators.required],
      // Description: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      cin: ['', Validators.required],
      adresse: ['', Validators.required],
      type: ['founder', Validators.required],
      association: ['', Validators.required],
      description: ['', Validators.required],
      emailAssociation: ['', Validators.required, Validators.email],
      logo: ['', Validators.required]
    });

    // this.firstFormGroup = this._formBuilder.group({
    //   firstname: ['', Validators.required, Validators.email],
    //   lastname: ['', Validators.required],
    //   phonenumber: ['', Validators.required],
    //   email: ['', Validators.required],
    //   NCIN: ['', Validators.required],
    //   Location: ['', Validators.required],
    //   Password: ['', Validators.required],
    // });

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
    formData.append('logo', this.secondFormGroup.value.logo)
    
    console.log(formData);
  }

}


