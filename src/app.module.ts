import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import '@shoelace-style/shoelace/dist/components/button/button.js'
import { AlertComponent3 } from './web-component3/web-component3.component';
import { AlertComponent1 } from './web-component/web-component.component';
import { AlertComponent2 } from './web-component2/web-component2.component';
import { AlertComponent4 } from './web-component4/web-component4.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,AlertComponent1,AlertComponent2,AlertComponent4],
  declarations: [AppComponent,AlertComponent3],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
