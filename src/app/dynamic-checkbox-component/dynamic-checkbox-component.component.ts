import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxOption } from '../app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-checkbox',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="form">
      <div formArrayName="checkboxes">
        <div
          *ngFor="let checkbox of checkboxes.controls; let i = index"
          [formGroupName]="i"
        >
          <p-checkbox
            binary="true"
            formControlName="selected"
            [label]="options[i].label"
          ></p-checkbox>
        </div>
      </div>
    </form>
    <div>
      <h4>Current form values:</h4>
      {{ this.form.value | json }}
    </div>
  `,
  styles: [``],
})
export class DynamicCheckboxComponent implements OnInit {
  @Input() options: CheckboxOption[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkboxes: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.initCheckboxes();
  }

  get checkboxes(): FormArray {
    return this.form.get('checkboxes') as FormArray;
  }

  private initCheckboxes(): void {
    this.options.forEach((option) => {
      this.checkboxes.push(
        this.fb.group({
          value: option.value,
          selected: option.selected,
        }),
      );
    });
  }
}
