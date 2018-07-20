import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// two way binding add-on part 1
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // two way binding add-on part 2
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
