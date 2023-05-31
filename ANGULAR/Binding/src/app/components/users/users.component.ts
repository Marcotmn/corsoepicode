import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { LogService } from 'src/app/service/log.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //il component riceve in inptu da app.component. html i valori di user e id che serviranno per chiamare i metodi dei service

  @Input() user: any;
  @Input() id!: number;

  constructor(private userSrv: UsersService, private logSrv: LogService) {  }

  ngOnInit(): void {}

  cambioStato(newStatus: string){ // il metodo cambioStato, chiamato dall'html, chiama i due metodi updateUser e logStatusChange presenti nei service importati
  this.userSrv.updateUser(this.id, newStatus);
  this.logSrv.logStatusChange(this.id, newStatus);
  }
}
