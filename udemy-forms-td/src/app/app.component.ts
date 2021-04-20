import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm
  defaultQuestion = 'pet'
  answer = ''
  genders = ['male', 'famale']

  suggestUserName() {
    const suggestedName = 'Superuser'
    // this.signupForm.setValue({
    //   userDate: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   select: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // })
    this.signupForm.form.patchValue({userData: {username: suggestedName }})
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm)
  }
}
