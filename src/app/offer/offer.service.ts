import { Injectable } from '@angular/core';
import { Card } from './offer-carousel/card.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private cards: Card[] = [
    {
      date: '17 მაისი',
      percent: 14,
      rangeFrom: 0,
      rangeTo: 250,
      completed: 80,
    },
    {
      date: '13 მაისი',
      percent: 13,
      rangeFrom: 0,
      rangeTo: 150,
      completed: 60,
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
      completed: 33,
    },
  ];


  getCards(): Card[] {
    return [...this.cards];
  }
}
