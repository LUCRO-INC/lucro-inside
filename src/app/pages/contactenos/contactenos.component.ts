import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  public sectionContactenos:Section = {}

  public clickSubmit:boolean = false

  public contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service:CmsService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      tel: ['',Validators.required],
      country: ['',Validators.required],
      company: ['',Validators.required],
      sector: ['',Validators.required],
      website: ['',Validators.nullValidator],
      employees: ['',Validators.required],
      description: ['',Validators.required],
    });
  }

  async ngOnInit() {
    window.scrollTo(0, 0);
    const p = await this.service.get()
    this.sectionContactenos = p.Contactenos?.find(item => item.name == 'sectionContactenos') || {}
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
