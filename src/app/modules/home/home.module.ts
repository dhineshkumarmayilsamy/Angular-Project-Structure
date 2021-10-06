import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeService } from './home.service';
import { SampleComponent } from './sample/sample.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    HomePageComponent,
    SampleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
