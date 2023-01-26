import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contato:Contato = new Contato()
  
  constructor(
    private serviceContato : AuthService
    

  ) { }

  ngOnInit(){
    window.scroll(0,0)
  
  }
    cadastrar(){
        this.serviceContato.enviar(this.contato).subscribe(()=>{
        alert('Mensagem enviada com sucesso')
      })
    }
}
