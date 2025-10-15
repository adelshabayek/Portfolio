import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    { title: 'Corporate Branding', category: 'UI/UX Design', image: 'assets/img/portfolio1.jpg' },
    { title: 'Business Landing Page', category: 'Web Development', image: 'assets/img/portfolio2.jpg' },
    { title: 'Dashboard App', category: 'Angular App', image: 'assets/img/portfolio3.jpg' },
  ];
}
