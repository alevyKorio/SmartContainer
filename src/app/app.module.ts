import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from "@angular/elements";

import { AppComponent } from './app.component';
import { SmartContainerComponent } from './smart-container/smart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('container-element', el);
  }
}
