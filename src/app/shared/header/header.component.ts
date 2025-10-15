import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;
  isDark = false;
  activeSection = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 30;
    this.detectActiveSection();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

   // ✅ Simple smooth scroll (native browser behavior)
  scrollTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 80; // adjust if your header overlaps content
      const elementPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth' // 👈 smooth scroll
      });
    }
  }

  detectActiveSection() {
    const sections = ['home', 'portfolio', 'about', 'resume', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
