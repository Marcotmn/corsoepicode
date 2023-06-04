import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  nome = 'marco';
  active = false;

  constructor() {
    console.log(`costruttore attivato, nome: ${this.nome}`);
  }

  ngOnInit(): void {}
}
