import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Pankaj'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     country: new FormControl(''),
  //     state: new FormControl(''),
  //     city: new FormControl(''),
  //     pinCode: new FormControl('')
  //   })
  // });

  get myUserName(){
    return this.registrationForm.get('userName');
  }
  constructor( private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['abc'],
      confirmPassword: ['abc'],
      address: this.fb.group({
        country: ['India'],
        state: ['Maharashtra'],
        city: ['Pune'],
        pinCode: ['411001']
      })
  });

  ngOnInit() {
  }

  loadDummyData() {
    this.registrationForm.setValue({
      userName: 'Pankaj Lokhande',
      password: 'abc',
      confirmPassword: 'abc',
      address: {
        country: 'India',
        state: 'Maharashtra',
        city: 'Pune',
        pinCode: '411001'
      }
    });
  }
  resetData() {
    this.registrationForm.setValue({
      userName: '',
      password: '',
      confirmPassword: '',
      address: {
        country: '',
        state: '',
        city: '',
        pinCode: ''
      }
    });
  }


}
