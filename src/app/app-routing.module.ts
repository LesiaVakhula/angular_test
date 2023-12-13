import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormDataComponent } from './components/user-form-data/user-form-data.component';
import { UserListFirstComponent } from './components/user-list-first/user-list-first.component';
import { UserListSecondComponent } from './components/user-list-second/user-list-second.component';
import { UserListThirdComponent } from './components/user-list-third/user-list-third.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'user-list-first',
    component: UserListFirstComponent,
  },
  {
    path: 'user-list-second',
    component: UserListSecondComponent,
  },
  {
    path: 'user-list-third',
    component: UserListThirdComponent,
  },
  {
    path: 'user-form',
    component: UserFormDataComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**',
    redirectTo: 'user-list-first',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
