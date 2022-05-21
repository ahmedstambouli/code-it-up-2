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
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      Location: ['', Validators.required],
      phonenumber: ['', Validators.required],
      dateC: ['', Validators.required],
      phoneN: ['', Validators.required],
      Logo: ['', Validators.required],
      Password: ['', Validators.required],
      Description: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
 
  }
 
  }


