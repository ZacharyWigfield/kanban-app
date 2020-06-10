import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Feature modules and components
import { HomePageComponent } from './home-page/home-page.component';

// etc...
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  // this path is lazy loaded. Recommended for any feature module loaded by router that isn't in the critical path during page load.
  // It basically imports the user module only when the path is routed to.
  // Remember that the default path in our user-routing module is the login page. 
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
