import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-carousel',
  templateUrl: './offer-carousel.component.html',
  styleUrls: ['./offer-carousel.component.scss'],
})
export class OfferCarouselComponent implements OnInit {
  focusedCardIndex = 0;

  cards: Card[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.cards = this.offerService.getCards();
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
    return (
      this.focusedCardIndex ===
      (index + this.cards.length - 1) % this.cards.length
    );
  }
}
