import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';

import { MovieNewRoutingModule } from './movie-new-routing.module';
import { MovieNewContainer } from './movie-new.container';

@NgModule({
  declarations: [MovieNewContainer],
  imports: [
    CommonModule,
    MovieNewRoutingModule,
    TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MultiSelectModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'movieNew' }],
})
export class MovieNewModule {}
