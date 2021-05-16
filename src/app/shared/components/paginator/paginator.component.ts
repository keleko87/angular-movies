import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() page: number;
  @Input() perPage: number;
  @Input() total: number;

  @Output() prev: EventEmitter<boolean> = new EventEmitter();
  @Output() next: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  get totalPages() {
    return Math.ceil(this.total / this.perPage);
  }

  get isLastPage() {
    return this.totalPages <= this.page;
  }

  get showPrev() {
    return this.page > 1 && this.totalPages > 1;
  }

  get showNext() {
    return !this.isLastPage;
  }

  goPrev() {
    this.prev.emit(true);
  }

  goNext() {
    this.next.emit(true);
  }
}
