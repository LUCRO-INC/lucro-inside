import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';
import { ContactService } from 'src/app/@core/services/contact.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss'],
})
export class ContactenosComponent implements OnInit, OnDestroy {
  public sectionContactenos: Section = {};

  public clickSubmit: boolean = false;

  public contactForm: FormGroup;

  timer: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CmsService,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      pais: ['', Validators.required],
      empresa: ['', Validators.required],
      sector: ['', Validators.required],
      web: ['', Validators.nullValidator],
      empleados: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  async ngOnInit() {
    window.scrollTo(0, 0);
    const p = await this.service.get();
    this.sectionContactenos =
      p.Contactenos?.find((item) => item.name == 'sectionContactenos') || {};
  }

  ngOnDestroy() { }

  async sendForm(contactForm: FormGroup) {
    if (contactForm.valid) {
      this.contactService.contact(contactForm.value).subscribe(_res => {
        this.clickSubmit = true;
        contactForm.reset();
        this.timer = setTimeout(() => {
          this.router.navigate(['empresas']);
        }, 10000);
      }, (_err) => {
        console.log(_err)
      })

    } else {
      console.log('Debe llenar todo el formulario');
    }
  }
}
