import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  isDark = false;
  activeSection = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 30;
    this.detectActiveSection();
  }

  ngOnInit(): void {
    // ✅ عند تحميل الصفحة، نتحقق من الوضع المخزن في localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDark = true;
      document.body.classList.add('dark-theme');
      document.documentElement.classList.add('dark-scrollbar');
    } else {
      this.isDark = false;
      document.body.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark-scrollbar');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    // ✅ تبديل الكلاس على body و html
    document.body.classList.toggle('dark-theme', this.isDark);
    document.documentElement.classList.toggle('dark-scrollbar', this.isDark);

    // ✅ تخزين التفضيل في localStorage
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  // ✅ Smooth scroll
  scrollTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 80;
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
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
