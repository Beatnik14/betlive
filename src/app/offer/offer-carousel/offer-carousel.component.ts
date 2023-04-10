import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-offer-carousel',
  templateUrl: './offer-carousel.component.html',
  styleUrls: ['./offer-carousel.component.scss']
})
export class OfferCarouselComponent implements OnInit {
  cards: Card[] = [
    {
      date: '14 მაისი',
      percent: 14,
      rangeFrom: 0,
      rangeTo: 250,
      completed: 80
    },
    {
      date: '13 მაისი',
      percent: 13,
      rangeFrom: 0,
      rangeTo: 150,
      completed: 60
    },
    {
      date: '15 მაისი',
      percent: 15,
      rangeFrom: 0,
      rangeTo: 350,
      completed: 45,
    },
    {
      date: '16 მაისი',
      percent: 16,
      rangeFrom: 0,
      rangeTo: 100,
      completed: 33
    },

  ];
  focusedCardIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPrevClick(): void {
    this.focusedCardIndex--;
    if (this.focusedCardIndex < 0) {
      this.focusedCardIndex = this.cards.length - 1;
    }
  }

  onNextClick(): void {
    this.focusedCardIndex++;
    if (this.focusedCardIndex >= this.cards.length) {
      this.focusedCardIndex = 0;
    }
  }

  isCenterCard(index: number): boolean {
    return this.focusedCardIndex === index;
  }

  isLeftCard(index: number): boolean {
    return this.focusedCardIndex === (index + 1) % this.cards.length;
  }

  isRightCard(index: number): boolean {
    return this.focusedCardIndex === (index + this.cards.length - 1) % this.cards.length;
  }

}
