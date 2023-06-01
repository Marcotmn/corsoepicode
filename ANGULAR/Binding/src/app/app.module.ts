import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //importa FormsModule per consentire ad Angular di riconoscere la presenza di un campo di input

import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UsersComponent } from './components/users/users.component';
import { CComponent } from './components/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    CComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
