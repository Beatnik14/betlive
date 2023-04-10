import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Input('appScroll') className: string;
  @HostBinding('class') elementClass: string;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.elementClass = window.pageYOffset > 80 ? this.className : '';
  }
}

