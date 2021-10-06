import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeService } from './home.service';
import { SampleComponent } from './sample/sample.component';

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
