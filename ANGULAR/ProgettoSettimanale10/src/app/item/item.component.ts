import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(titolo: string) {
    if (!titolo) return;
    this.editable = false;
    this.item.titolo = titolo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
