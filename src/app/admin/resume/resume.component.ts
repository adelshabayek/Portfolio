import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
 resume = [
    { year: '2020', title: 'BSc in Computer Science', place: 'Cairo University' },
    { year: '2021', title: 'Front-End Developer', place: 'Freelance' },
    { year: '2023', title: 'Angular Developer', place: 'Remote Projects' },
  ];
}
