import { Component, Input, AfterViewInit, forwardRef, Output, EventEmitter } from '@angular/core';
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
        display: inline-block;
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
    <div class="input-counter-group">
      <input 
        [id]="id" 
        [type]="type"
        [ngClass]="className" 
        [name]="name" 
        [placeholder]="placeholder" 
        [maxlength]="maxlength" 
        [disabled]="disabled" 
        [pattern]="pattern" 
        [required]="required" 
        [readonly]="readonly"
        [(ngModel)]="value"
        (focus)="onFocus()" 
        (blur)="onBlur()">
      <span *ngIf="enabled" class="text-input-counter">
        <span *ngIf="displayMinLength()">{{ minlength }} characters at least required: </span>{{ counter }}<span *ngIf="displayMaxLength()">/{{ maxlength }}</span>
      </span>
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
    id: string;
    @Input()
    type = 'text';
    @Input()
    name: string;
    @Input()
    maxlength: number;
    @Input()
    minlength: number;
    @Input()
    className: string;
    @Input()
    placeholder = '';
    @Input()
    disabled = false;
    @Input()
    readonly = false;
    @Input()
    pattern: string;
    @Input()
    required = false;
    @Output()
    focus: EventEmitter<any> = new EventEmitter();
    @Output()
    blur: EventEmitter<any> = new EventEmitter();

    ngAfterViewInit() {
      this.updateCounter();
    }

    enableCounter() {
      this.enabled = true;
    }

    disableCounter() {
      this.enabled = false;
    }

    displayMinLength() {
      return this.minlength && this.counter < this.minlength;
    }

    displayMaxLength() {
      return this.maxlength && this.counter > 0 && !this.displayMinLength();
    }

    onFocus() {
      this.enableCounter();
      this.focus.emit();
    }

    onBlur() {
      this.disableCounter();
      this.onTouchedCallback();
      this.blur.emit();
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
