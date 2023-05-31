import { Component } from '@angular/core';
import { UsersService } from './service/users.service'; //importazione del service users

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Binding';
  users= this.userSrv.users; // utilizza l'array presente nel service users, importato, per passarlo al componente users

  constructor(private userSrv: UsersService) {}
}
