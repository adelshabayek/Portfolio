import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // ✅ should be `styleUrls` not `styleUrl`
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
