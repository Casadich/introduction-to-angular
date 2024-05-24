import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SousingListComponent } from './sousing-list/sousing-list.component';
import { HousingListComponent } from './housing-list/housing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SousingListComponent,
    HousingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
