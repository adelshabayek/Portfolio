import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
   @ViewChild(Carousel) carousel!: Carousel;
  testimonials: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.testimonials = data.testimonials;
    });
  }

  next() {
    // ✅ تمرير حدث فارغ كقيمة لأن الدالة تتطلب وسيط event
    const fakeEvent = new MouseEvent('click');
    this.carousel.navForward(fakeEvent);
  }

  prev() {
    const fakeEvent = new MouseEvent('click');
    this.carousel.navBackward(fakeEvent);
  }
}
