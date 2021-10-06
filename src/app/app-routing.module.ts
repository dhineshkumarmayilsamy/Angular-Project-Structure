import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { SampleComponent } from './modules/home/sample/sample.component';
import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { HomeLayoutComponent } from './modules/_layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './modules/_layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'sample',
        component: SampleComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
