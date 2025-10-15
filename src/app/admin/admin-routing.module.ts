import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
];

@NgModule({
imports: [
    RouterModule.forChild(routes), // ✅ Correct for feature module
  ],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
