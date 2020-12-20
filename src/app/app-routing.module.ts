import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './components/view/painel/painel.component'
import { PerfilComponent } from './components/view/perfil/perfil.component'


const routes: Routes = [
  
  { path: '', component: PainelComponent },
  { path: 'signo', component: PainelComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
