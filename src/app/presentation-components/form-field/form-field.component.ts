import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ak-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() title;

  constructor() {
  }

  ngOnInit() {
  }

}
