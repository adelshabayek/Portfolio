import { ElementRef } from '@angular/core';
import { ScrollAnimateDirective } from './scroll-animate.directive';

describe('ScrollAnimateDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ScrollAnimateDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
