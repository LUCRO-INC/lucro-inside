import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  public clickSubmit:boolean = false

  public contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      tel: ['',Validators.required],
      country: ['',Validators.required],
      company: ['',Validators.required],
      sector: ['',Validators.required],
      employees: ['',Validators.required],
      description: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

  sendForm(contactForm:FormGroup){
    if(contactForm.valid){
      this.clickSubmit = true;
      console.log(contactForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
