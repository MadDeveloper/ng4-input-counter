import { Component, Input, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCounterComponent),
    multi: true
};

const noop = () => {};

@Component({
  selector: 'input-counter',
  template: `
    <style>
      .input-counter-group {
        position: relative;
      }

      .input-counter-group span {
        color: #b0b0b0;
        font-size: 10px;
      }

      .input-counter-group .text-input-counter {
        position: absolute;
        line-height: 10px;
        right: 0;
        bottom: -13px;
      }
    </style>
    <div class="form-group input-counter-group">
      <input
        [ngClass]="class" 
        [maxlength]="maxlength"
        [(ngModel)]="value"
        (focus)="onFocus()" 
        (blur)="onBlur()">
      <span *ngIf="enabled" class="text-input-counter">{{ counter }}<span *ngIf="maxlength && counter > 0">/{{ maxlength }}</span></span>
    </div>
  `,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputCounterComponent implements AfterViewInit, ControlValueAccessor {
    private innerValue: any = '';
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    private counter: number;
    private enabled: boolean;

    @Input()
    maxlength: number;
    @Input()
    class = 'form-control';

    ngAfterViewInit() {
      this.updateCounter();
    }

    enableCounter() {
      this.enabled = true;
    }

    disableCounter() {
      this.enabled = false;
    }

    onFocus() {
      this.enableCounter();
    }

    onBlur() {
      this.disableCounter();
      this.onTouchedCallback();
    }

    updateCounter() {
      if (this.innerValue) {
        this.counter = this.innerValue.length;
      } else {
        this.counter = 0;
      }
    }

    writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
          this.updateCounter();
      }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    get value() {
      return this.innerValue;
    }

    set value(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.updateCounter();
            this.onChangeCallback(value);
        }
    }
}
