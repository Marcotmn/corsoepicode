import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() nomeInviato!: string;

  constructor() {
    console.log(`costruttore attivato; nome: ${this.nomeInviato}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit attivato; nome: ${this.nomeInviato}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges attivato, cambimenti: ${changes}`);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck attivato');
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit attivato');
  }

  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked attivato');
  }

  ngAfterViewInit(): void {
    console.log('ngafterviewinit attivato');
  }

  ngAfterViewChecked(): void {
    console.log('afterviewched attivato');
  }
}
