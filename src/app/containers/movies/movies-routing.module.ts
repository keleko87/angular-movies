import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesContainer } from './movies.container';

const routes: Routes = [
  {
    path: '',
    component: MoviesContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
