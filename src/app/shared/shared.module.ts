import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Add this for routerLink in shared components

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollAnimateDirective } from '../core/directives/scroll-animate.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    ButtonModule,
    CardModule,
    

  ],
  exports: [ HeaderComponent,
    FooterComponent,
      CardComponent,
      

    ]
})
export class SharedModule { }
