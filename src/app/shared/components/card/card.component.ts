import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title: string;
  @Input() footerItems: string[] = [];

  @Input() image: string;
  @Input() imageLoader = '../../../../assets/img/image-cube.gif';
  @Input() defaultImage = '../../../../assets/img/image-not-available.png';

  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  get imageSrc() {
    return this.isLoading ? this.imageLoader : this.image;
  }

  hideLoader() {
    this.isLoading = false;
  }

  setDefaultImage() {
    this.image = this.defaultImage;
  }
}
