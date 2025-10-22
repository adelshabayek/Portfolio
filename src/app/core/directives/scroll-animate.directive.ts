import {
  Directive,
  ElementRef,
  HostBinding,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {

  @HostBinding('class.show') isVisible = false;

  private observer!: IntersectionObserver;
  private lastScrollY = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > this.lastScrollY;
        this.lastScrollY = currentScrollY;

        // ✅ Show if element is visible and either:
        // - we're scrolling down, or
        // - it's already fully inside viewport (like footer)
        if (entry.isIntersecting && (scrollingDown || this.isElementFullyVisible(entry))) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  private isElementFullyVisible(entry: IntersectionObserverEntry): boolean {
    const { top, bottom } = entry.boundingClientRect;
    const windowHeight = window.innerHeight;
    return top >= 0 && bottom <= windowHeight;
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
