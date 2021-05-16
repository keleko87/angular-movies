import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [CardComponent, PaginatorComponent],
  imports: [CommonModule],
  exports: [CardComponent, PaginatorComponent],
})
export class SharedModule {}
