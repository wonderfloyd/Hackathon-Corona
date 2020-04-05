import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label: string;
  @Input() id: string;
  @Input() type: string;
  @Output() changeHandler: EventEmitter<string> = new EventEmitter();

  constructor() {}

  handleInputChange(e: Event) {
    this.changeHandler.emit((e.target as HTMLInputElement).value);
  }

}
