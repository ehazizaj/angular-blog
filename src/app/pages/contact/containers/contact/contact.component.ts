import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  form: FormGroup;
  hasUnsavedChanges = false;
  constructor(
    private fb: FormBuilder) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
        name: [ '', Validators.required ],
        email: [ '', Validators.required ],
        phone: '',
        message: [ '', Validators.required ],
      },
    );
  }
  onSubmit(){
    console.log(this.form.value);
  }
  onFormChange(event: boolean, touched: boolean) {
    this.hasUnsavedChanges = true;
  }


  canDeactivate(): Observable<boolean> | boolean {
    if (!this.hasUnsavedChanges) {
      return true;
    }
    return confirm('All your forms will be lost, are you sure?');
  }

  required(name: string) {
    console.log('required', name);
    return this.form.get(name).hasError('required') && this.form.get(name).touched;
  }
}
