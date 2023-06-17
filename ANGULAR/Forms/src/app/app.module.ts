import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TdformComponent } from './components/tdform/tdform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

@NgModule({
  declarations: [AppComponent, TdformComponent, ReactiveformComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule 
