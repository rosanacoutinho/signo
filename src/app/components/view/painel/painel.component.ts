import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import signos from '../../../../assets/dados/signos.json'
import { Signo } from '../../model/signo.model'
import { DadoService } from '../../service/dado.service'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  dados: Signo[] = signos
  tipoSelecionado:string = '';


  constructor(private route: ActivatedRoute,
              private router: Router,
              private dadoService: DadoService) { }



  ngOnInit(): void {
  }



  tipos:Array<any> = [
      {id: 'aries', nome: "Áries"},
      {id: 'touro', nome: "Touro"},
      {id: 'gemeos', nome: "Gêmeos"},
      {id: 'cancer', nome: "Câncer"},
      {id: 'virgem', nome: "Virgem"},
      {id: 'libra', nome: "Libra"},
      {id: 'escorpiao', nome: "Escorpião"},
      {id: 'sagitario', nome: "Sagitário"},
      {id: 'aquario', nome: "Aquário"},
      {id: 'peixes', nome: "Peixes"},
      {id: 'leao', nome: "Leão"},
      {id: 'capricornio', nome: "Capricórnio"}
  ];



 

  goToPerfil(){
    
    var signoEscolhido = this.tipoSelecionado
    var nome : string = ''
    var local : string = ''
    var descricao: string = ''
  
    for (var ind in this.dados) {
      var obj = this.dados[ind]; 

      if (obj.id == signoEscolhido) {   
        nome = obj.nome 
        local = obj.descricao
            var file = `assets/dados/`+ local
            fetch(file)
            .then( r => r.text())
            .then( t => {   
                          descricao = t; 
                          this.dadoService.upDateData(nome, descricao)
                          this.router.navigate(['/perfil'], { relativeTo: this.route });                          
            } )
      }
   }
    
  }
  
}
