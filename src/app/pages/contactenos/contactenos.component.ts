import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  public clickSubmit:boolean = false

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

}
