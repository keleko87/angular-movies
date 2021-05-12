import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePath } from 'src/app/core/constants/routes.constants';
import { MoviesContainer } from './movies.container';

const routes: Routes = [
  {
    path: '',
    component: MoviesContainer,
  },
  {
    path: RoutePath.NEW,
    loadChildren: () =>
      import('./containers/movie-new/movie-new.module').then((m) => m.MovieNewModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
