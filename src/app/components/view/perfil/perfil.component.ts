import { Component, OnInit } from '@angular/core';
import { DadoService } from '../../service/dado.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private dadoService: DadoService) { }


  
 nome: string = ''
 descricao: string = ''
 
 
  ngOnInit(): void {
    this.nome = this.dadoService.getNomeSigno()
    this.descricao = this.dadoService.getDescricaoSigno()

  }

  voltar(){
      this.router.navigate(['/'], { relativeTo: this.route });  
  }



}
