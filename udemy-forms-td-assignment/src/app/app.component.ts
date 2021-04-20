import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('formEx', {static: false}) signupForm: NgForm
  subscriptions = ['basic', 'advanced', 'pro']
  defaultSubscription = 'advanced'

  onSubmit() {
    console.log('Form: ', this.signupForm.value)
  }
}
