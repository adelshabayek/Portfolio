import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contact: any;

  constructor(private profileService: ProfileService) {}
  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.contact = data.contact;
    });
  }
}
