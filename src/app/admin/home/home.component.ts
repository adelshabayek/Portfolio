import { Component, HostListener, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroData: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe((data) => {
      this.heroData = data.hero;
    });
  }

  scrollTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerOffset = 80; // adjust to your header height
    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;

    const duration = 1000; // 🕐 scroll speed (1000ms = 1s) → increase for slower scroll
    let startTime: number | null = null;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ✨ simple linear easing (smooth constant speed)
      window.scrollTo(0, startY + distance * progress);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }

  detectActiveSection() {
    const sections = ['portfolio'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          break;
        }
      }
    }
  }
}
