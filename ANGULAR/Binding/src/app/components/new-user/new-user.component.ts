import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  name: string = ''; // nome della variabile che sarà collegata al campo di input presente nell'html

  constructor(private userSrv: UsersService) {}


  ngOnInit(): void {}

  newUser(nome: string) { // metodo che riceve il valore collegato e lo passa al metodo createUser del service
    this.userSrv.createUser(nome)
  }
}
