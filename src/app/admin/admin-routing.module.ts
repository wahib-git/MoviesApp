import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  {path: '', component: AdminComponent },
  {path: 'create',component: AddMovieComponent},
  {path: 'update/:id', component:UpdateMovieComponent},  
  {path: 'list', component: ListMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
