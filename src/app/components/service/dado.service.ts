import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadoService {


  constructor( ) { }

   nome :string = ''
   descricao: string = '' 

  upDateData(nome: string, descricao: string){
      this.nome = nome;
      this.descricao=descricao
  }

  getNomeSigno(){
    return this.nome
  }

  getDescricaoSigno(){
    return this.descricao
  }
  
}
