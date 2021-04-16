import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:'catalogo', component:CatalogoComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path: '',
      redirectTo: '/catalogo',
      pathMatch: 'full'
  },
  {path: '**',
      redirectTo: '/catalogo',
      pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
