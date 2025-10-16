import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectsData: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.projectsData = data.projects;
    });
  }
}
