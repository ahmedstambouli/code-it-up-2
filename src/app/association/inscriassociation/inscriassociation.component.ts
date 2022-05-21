import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
      email: ['', Validators.required, Validators.email],
      Name: ['', Validators.required],
      Location: ['', Validators.required],
      phonenumber: ['', Validators.required],
      dateC: ['', Validators.required],
      phoneN: ['', Validators.required],
      Logo: ['', Validators.required],
      Password: ['', Validators.required],
      Description: ['', Validators.required],
    });

    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required, Validators.email],
      lastname: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', Validators.required],
      NCIN: ['', Validators.required],
      Location: ['', Validators.required],
      Password: ['', Validators.required],
    });
 this.addAssociation()
  }

  user:{};
  addAssociation(){
   
    this.user=[this.secondFormGroup.value,this.firstFormGroup.value]
    console.log(this.user)
  }
  
 
  }


