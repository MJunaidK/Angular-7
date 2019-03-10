import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Access the form before submit use viewChild
  @ViewChild('f') signupForm: NgForm; 
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

//setValue to set your while form
//PatchValue to override parts of the form

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret : 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })

  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }

}
