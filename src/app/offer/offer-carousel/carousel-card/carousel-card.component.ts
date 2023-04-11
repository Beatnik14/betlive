import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselCardComponent implements OnInit {
  sliderValue = 60;

  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {
    this.sliderValue = this.card?.completed;
  }
}
