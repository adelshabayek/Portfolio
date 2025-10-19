import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollAnimateDirective } from './core/directives/scroll-animate.directive';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatIconModule,
    AdminModule,
    MatDividerModule,
    MatButtonModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    CarouselModule,
    RatingModule,
    ProgressSpinnerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
