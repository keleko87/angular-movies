import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './core/constants/routes.constants';

const routes: Routes = [
  {
    path: RoutePath.HOME,
    loadChildren: () => import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: RoutePath.HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
