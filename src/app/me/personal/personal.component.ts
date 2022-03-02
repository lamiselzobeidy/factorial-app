import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  generalInfoForm: FormGroup;
  identificationNumberForm: FormGroup;
  addressForm: FormGroup;
  emergancyContactForm: FormGroup;
  bankInfoForm: FormGroup;

  ngOnInit(): void {
    this.generalInfoForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'preferredname': new FormControl(null),
      'dateofbirth': new FormControl(null),
      'legalgender': new FormControl(null),
      'nationality': new FormControl(null),
      'phonenumber': new FormControl(null),
      'paymentfrequency': new FormControl('monthly')
    });
    this.identificationNumberForm = new FormGroup({
      'number': new FormControl(null)
    });
    this.addressForm = new FormGroup({
      'address':new FormControl(null),
      'address2': new FormControl(null),
      'city': new FormControl(null),
      'zipcode': new FormControl(null),
      'state': new FormControl(null),
      'country': new FormControl(null),
    });
    this.emergancyContactForm = new FormGroup({
      'name':new FormControl(null),
      'phonenumber': new FormControl(null),
    });
    this.bankInfoForm = new FormGroup({
      'banknumber': new FormControl(null),
      'swiftbic': new FormControl(null)
    })
  }

}
