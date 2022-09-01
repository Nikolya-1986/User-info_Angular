import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
  },
  {
    path: 'create', component: CreateComponent,
  },
  {
    path: 'create/:id', component: CreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
