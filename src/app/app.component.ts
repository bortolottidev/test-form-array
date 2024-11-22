import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicCheckboxComponent } from './dynamic-checkbox-component/dynamic-checkbox-component.component';
export interface CheckboxOption {
  label: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  checkboxOptions: CheckboxOption[] = [
    { label: 'Opzione 1', value: 'opzione1', selected: false },
    { label: 'Opzione 2', value: 'opzione2', selected: true },
    { label: 'Opzione 3', value: 'opzione3', selected: true },
  ];
}
