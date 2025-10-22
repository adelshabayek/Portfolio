import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// 👇 Import PrimeNG module
import { CardModule } from 'primeng/card';
import { ScrollAnimateDirective } from '../core/directives/scroll-animate.directive';
import { ProjectComponent } from './project/project.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'; // ✅ ضروري لـ ngModel
import { Carousel } from 'primeng/carousel'; // ✅ استيراد صحيح من PrimeNG
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ScrollAnimateDirective,
    ProjectComponent,
    TestimonialsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CardModule,
    CarouselModule,
    ButtonModule,
     TagModule,
     FormsModule,
     RatingModule,
   AnimateOnScrollModule
    
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ScrollAnimateDirective,
    ProjectComponent,
    TestimonialsComponent,
    ],
})
export class AdminModule {}
