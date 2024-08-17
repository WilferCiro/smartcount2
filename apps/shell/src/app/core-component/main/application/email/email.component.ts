import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  checkAll = false;
  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;
  checkbox6 = false;
  checkbox7 = false;
  checkbox8 = false;
  checkbox9 = false;
  checkbox10 = false;


  toggleAllCheckboxes() {
    this.checkbox1 = this.checkAll;
    this.checkbox2 = this.checkAll;
    this.checkbox3 = this.checkAll;
    this.checkbox4 = this.checkAll;
    this.checkbox5 = this.checkAll;
    this.checkbox6 = this.checkAll;
    this.checkbox7 = this.checkAll;
    this.checkbox8 = this.checkAll;
    this.checkbox9 = this.checkAll;
    this.checkbox10 = this.checkAll;
  }
}
