import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {

  workForm: FormGroup;
  timeOffForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.workForm = this.SetworkForm();
    this.timeOffForm = this.SetTimeOffForm();
  }

  ngOnInit(): void { }

  SetworkForm() {
    return this.fb.group({
      manager: '',
      email: ['', Validators.email],
      workPlace: ''
    })
  }

  SetTimeOffForm() {
    return this.fb.group({
      timeOffSV: '',
    })
  }



}
