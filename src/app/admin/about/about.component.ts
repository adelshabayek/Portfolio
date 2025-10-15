import { Component } from '@angular/core';
import { ProfileService } from '../../core/directives/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  aboutData: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe((data) => {
      this.aboutData = data.about;
    });
  }

}
