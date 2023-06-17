import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss'],
})
export class TdformComponent implements OnInit {
  @ViewChild('contenitoreForm', { static: true }) contenitoreForm!: NgForm;

  superHero = {
    defSupName: '',
    alterEgo: '',
    enemy: '',
    planet: '',
    weakness: '',
    choose: '',
  };

  power = '';

  hero: any = {
    SupName: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: '',
  };

  ngOnInit(): void {
    this.contenitoreForm.statusChanges?.subscribe((stato) => {
      console.log(this.contenitoreForm);
      console.log(`stato del form: ${stato}`);
    });
  }

  submitForm() {
    console.log(`form inviato: ${this.contenitoreForm}`);
    this.hero.SupName = this.contenitoreForm.value.heroInfo.defSupName;
    this.hero.alterEgo = this.contenitoreForm.value.heroInfo.alterEgo;
    this.hero.power = this.contenitoreForm.value.heroInfo.choose;
    this.hero.enemy = this.contenitoreForm.value.heroInfo.enemy;
    this.hero.planet = this.contenitoreForm.value.heroInfo.planet;
    this.hero.weakness = this.contenitoreForm.value.heroInfo.weakness;

    this.contenitoreForm.reset();
  }
}
