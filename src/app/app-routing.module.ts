import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialComponent } from './material/material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './share/auth.guard';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    canActivate: [AuthGuard],
  },

  { path: 'material', component: MaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
