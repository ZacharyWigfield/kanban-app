import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Feature modules and components
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
