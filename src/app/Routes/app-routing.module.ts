import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../components/home/inicio/inicio.component';

import { ContainerSearchComponent } from '../components/movies/container-search/container-search.component';
import { InfoSearchComponent } from '../components/movies/info-search/info-search.component';
import { SearchComponent } from '../components/search/search.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  {path: 'movies', component: ContainerSearchComponent},
  {path: 'movies/details/:id' , component: InfoSearchComponent},
   
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
