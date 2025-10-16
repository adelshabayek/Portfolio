import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.testimonials = data.testimonials;
    });
  }
}
