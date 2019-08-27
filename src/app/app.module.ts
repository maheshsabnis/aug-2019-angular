// 1. import all standard modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 2. import all custom components, directives, services, pipes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { StudentComponent } from './components/studentcomponent/app.student.component';
import { HeroJobAdComponent } from './components/dynamiccomponent/hero-job-ad.component';
import { HeroProfileComponent } from './components/dynamiccomponent/hero-profile.component';
import { AppDynamicComponent } from './components/dynamiccomponent/app.component';
import { AdDirective } from './components/dynamiccomponent/ad.directive';
import { AdBannerComponent } from './components/dynamiccomponent/ad-banner.component';
import { AdService } from './components/dynamiccomponent/ad.service';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent, StudentComponent,
    HeroJobAdComponent, HeroProfileComponent,
    AppDynamicComponent, AdDirective, AdBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [StudentComponent]
})
export class AppModule { }
