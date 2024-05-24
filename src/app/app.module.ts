import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SousingListComponent } from './sousing-list/sousing-list.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { ContainerComponent } from './container/container.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    SousingListComponent,
    HousingListComponent,
    ContainerComponent,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
