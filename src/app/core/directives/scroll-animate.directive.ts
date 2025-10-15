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

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // يظهر العنصر -> فعّل الأنيميشن
          this.isVisible = true;
        } else {
          // خرج من الشاشة -> أعده للحالة الأصلية
          this.isVisible = false;
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
