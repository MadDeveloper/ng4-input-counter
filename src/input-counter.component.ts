import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'input-counter',
  template: `
    <style>
      .input-counter-group {
        position: relative;
      }

      .input-counter-group span {
        color: #999;
        text-transform: uppercase;
        font-size: .5em;
      }

      .input-counter-group text-input-counter {
        position: absolute;
        right: 10px;
        bottom -8px;
      }
    </style>
    <div class="d-inline-block form-group input-counter-group">
      <input #input-counter type="text" class="form-control" 
        [(ngModel)]="ngModel" 
        (keyup)="update()" 
        (focus)="enableCounter()" 
        (blur)="disableCounter()">
      <span *ngIf="enabled" class="text-input-counter">{{ counter }}<span *ngIf="maxlength">/{{ maxlength }}</span></span>
    </div>
  `,
})
export class InputCounterComponent implements AfterViewInit {
    @Input()
    ngModel: any;

    @Input()
    maxlength: number;

    @ViewChild('input-counter')
    private inputCounter: any;

    private counter: number;

    private enabled: boolean;

    ngAfterViewInit() {
      this.update();
    }

    enableCounter() {
      this.enabled = true;
    }

    disableCounter() {
      this.enabled = false;
    }

    update() {
      this.counter = this.inputCounter.nativeElement.value.length;
    }
}
