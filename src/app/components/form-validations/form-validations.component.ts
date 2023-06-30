import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {

  formValidations = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };
  submitted: any;
  canSubmit(): boolean {
    // Add your validation logic here
    return (
      this.formValidations.name !== '' &&
      this.formValidations.email !== '' &&
      // this.formValidations.contact !== '' &&
      // this.formValidations.password !== '' &&
      this.formValidations.password.length >= 8 &&
      this.formValidations.email.includes('@') &&
      this.formValidations.contact.length === 10
    );
  }


  submit() {
    const { name, email, contact, password } = this.formValidations;
    this.submitted = {
      name,
      email,
      contact,
      password
    };
  }
}
