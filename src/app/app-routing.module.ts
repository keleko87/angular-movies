import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePath } from './core/constants/routes.constants';

const routes: Routes = [
  {
    path: routePath.HOME,
    loadChildren: () => import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: routePath.HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
