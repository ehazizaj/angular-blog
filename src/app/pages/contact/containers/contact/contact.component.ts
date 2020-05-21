import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  form: FormGroup;
  hasUnsavedChanges = false;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
        name: [ '', [Validators.pattern('[a-zA-Z ]*'), Validators.required]],
        email: [ '', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        phone: '',
        message: [ '', Validators.required ],
      },
    );
  }
  onSubmit(){
    this.hasUnsavedChanges = false;
    this.form.reset();
    this.router.navigate([ '/contact/success' ]);
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
    return this.form.get(name).hasError('required') && this.form.get(name).touched;
  }

  pattern(name: string) {
    return this.form.get(name).hasError('pattern') && this.form.get(name).touched;
  }
}
