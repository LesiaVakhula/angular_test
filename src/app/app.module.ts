import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListFirstComponent } from './components/user-list-first/user-list-first.component';
import { UserListFirstItemComponent } from './components/user-list-first/user-list-first-item/user-list-first-item.component';
import { UserListSecondItemComponent } from './components/user-list-second/user-list-second-item/user-list-second-item.component';
import { UserListSecondComponent } from './components/user-list-second/user-list-second.component';
import { HelperService } from './services/helper.service';
import { UserListThirdComponent } from './components/user-list-third/user-list-third.component';
import { UserListThirdItemComponent } from './components/user-list-third/user-list-third-item/user-list-third-item.component';
import { UserFormDataComponent } from './components/user-form-data/user-form-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListFirstComponent,
    UserListFirstItemComponent,
    UserListSecondItemComponent,
    UserListSecondComponent,
    UserListThirdComponent,
    UserListThirdItemComponent,
    UserFormDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MainModule],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
