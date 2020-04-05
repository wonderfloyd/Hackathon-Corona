import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { InputFieldComponent } from '../components/input-field/input-field.component';


@NgModule({
  declarations: [LoginPage, RegisterPage, InputFieldComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      }
    ])
  ]
})
export class AuthModule { }
