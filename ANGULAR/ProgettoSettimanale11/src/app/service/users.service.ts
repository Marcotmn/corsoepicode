import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}
  recupera() {
    return this.http.get<Users[]>(`${this.baseURL}users`);
  }

  cancella(id: number) {
    return this.http.delete<Users>(`${this.baseURL}users/${id}`);
  }

  aggiungi(dati: Users) {
    return this.http.post<Users>(`${this.baseURL}users`, dati);
  }
}
