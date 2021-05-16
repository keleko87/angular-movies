import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './core/constants/routes.constants';

const routes: Routes = [
  {
    path: RoutePath.HOME,
    loadChildren: () => import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: RoutePath.MOVIES,
    loadChildren: () => import('./containers/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    redirectTo: RoutePath.HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
