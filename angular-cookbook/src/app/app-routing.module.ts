import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InfoComponent} from './info/info.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
