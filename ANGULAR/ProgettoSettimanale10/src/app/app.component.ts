import { Component } from '@angular/core';
import { ItemComponent } from 'item.component';
import { Item } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';

  filtro: 'todos' | 'attivi' | 'completati' = 'todos';

  allItems = [
    { titolo: 'mangiare', done: true },
    { titolo: 'dormire', done: false },
    { titolo: 'studiare', done: false },
    { titolo: 'correre', done: false },
  ];

  item!: { titolo: string; done: boolean };

  get items() {
    if (this.filtro === 'todos') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filtro === 'completati' ? item.done : !item.done
    );
  }

  addItem(titolo: string) {
    this.allItems.unshift({
      titolo,
      done: false,
    });
  }

  remove(item: string) {
    this.allItems.splice(this.allItems.indexOf(this.item), 1);
  }
}
