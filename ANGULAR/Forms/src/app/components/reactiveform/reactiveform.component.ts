import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  contenitoreFormReactive!: FormGroup;
  power = ['supersalto', 'superforza'];
  supnameProibiti = ['Shazam', 'Mariottide'];

  constructor(private fb: FormBuilder) {}

  validSupName = (formC: FormControl) => {
    if (this.supnameProibiti.includes(formC.value)) {
      return { 'nome proibito': true };
    } else {
      return null;
    }
  };

  ngOnInit(): void {
    this.contenitoreFormReactive = this.fb.group({});

    this.contenitoreFormReactive.valueChanges.subscribe((stato) => {
      console.log(`Stato del form: ${stato}`);
    });
  }

  getErrorsC(nome: string, errore: string) {
    return this.contenitoreFormReactive.get(nome)?.errors![errore];
  }

  getFormC(nome: string) {
    return this.contenitoreFormReactive.get(nome);
  }
}
