import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    //https://paula-leticia.herokuapp.com
  
  enviar(contato: Contato): Observable<Contato>{
    return this.http.post<Contato>('https://paula-leticia.herokuapp.com/contatos/post', contato)


    

  }
}
