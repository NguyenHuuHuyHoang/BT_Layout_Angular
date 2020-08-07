import { BtLayoutModule } from './bt-layout/bt-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BtLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
