import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNewRoutingModule } from './movie-new-routing.module';
import { MovieNewContainer } from './movie-new.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@NgModule({
  declarations: [MovieNewContainer],
  imports: [CommonModule, MovieNewRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'movie-new' }],
})
export class MovieNewModule {}
