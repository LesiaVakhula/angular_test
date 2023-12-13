import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { CalculateHelperService } from '../services/calculate-helper.service';

const Routes = [{ path: '', component: LazyComponent }];
@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, RouterModule.forChild(Routes)],
  providers: [CalculateHelperService],
})
export class LazyModule {}
