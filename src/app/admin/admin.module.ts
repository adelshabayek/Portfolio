import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// 👇 Import PrimeNG module
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CardModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,

  ]
})
export class AdminModule { }
