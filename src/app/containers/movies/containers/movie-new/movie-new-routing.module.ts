import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieNewContainer } from './movie-new.container';

const routes: Routes = [
  {
    path: '',
    component: MovieNewContainer,
    data: {
      breadcrumb: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieNewRoutingModule {}
