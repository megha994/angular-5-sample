import { Component, Input } from "@angular/core";
import {
  FormControlName,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "hello",
  templateUrl: "hello.component.html",
  styleUrls: ["hello.component.css"]
})
export class HelloComponent {
  // @Input()
  personalInfo;
  FormGroup;
  constructor(fb: FormBuilder) {
    this.personalInfo = fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      day: ["", Validators.required],
      month: ["", Validators.required],
      year: ["", Validators.required]
    });
  }
  public day: Array<{}> = [];
  public year: Array<{}> = [];
  public month: Array<{}> = [];

  ngOnInit() {
    this.getDayMonthYear();
  }

  getDayMonthYear() {
    for (var i = 1; i <= 31; i++) {
      this.day.push(i);
    }
    for (var j = 1; j <= 12; j++) {
      this.month.push(j);
    }
    for (var k = 1990; k <= 2019; k++) {
      this.year.push(k);
    }
  }

  onSubmit() {}
}
