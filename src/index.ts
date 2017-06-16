import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputCounterComponent } from './input-counter.component';

export * from './input-counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    InputCounterComponent
  ],
  exports: [
    InputCounterComponent
  ]
})
export class InputCounterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InputCounterModule,
      providers: []
    };
  }
}
