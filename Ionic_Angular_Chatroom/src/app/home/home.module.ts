import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MainNavComponent } from '../components/main-nav/main-nav.component';
import { ChatComponent } from './chat/chat.component';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import { ChatService } from '../services/chat/chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [UserAvatarComponent],
  providers: [ChatService],
  declarations: [HomePage, MainNavComponent, ChatComponent, UserAvatarComponent]
})
export class HomePageModule {}
