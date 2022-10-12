import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import ContactUs from 'src/app/models/contactus';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb: FormBuilder , private apiservice: ApiService ) { }

  ngOnInit(): void {
  }
  data! : ContactUs ;
  show = false;
  contactusForm = this.fb.group({
    name : ['' , [Validators.required ] ],
    email : ['' , [Validators.required ] ],
    message : ''
  });

  signupsubmit(){
    // this.apiservice.signupData = this.signupForm.value;
   this.data = {
    firstName : this.contactusForm.value.name.split(' ')[0],
    midleName : this.contactusForm.value.name.split(' ')[1],
    lastName : this.contactusForm.value.name.split(' ')[2],
    email : this.contactusForm.value.email,
    description : this.contactusForm.value.message
   }
   console.log(this.data);
   this.apiservice.addContactUs(this.data).subscribe(data => {
    console.log(data);
    this.show = true;
   })

  }

}
