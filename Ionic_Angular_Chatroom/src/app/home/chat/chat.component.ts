import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../../types';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  private messages: Message[];
  private message: string;

  @Input() userName: string;

  constructor(private chatService: ChatService) {
    this.messages = [];
    this.message = '';
  }

  private getMessageType(message: Message): string {
    return this.userName === message.user.name ? 'outgoing' : 'incoming';
  }

  sendMessage(): void {
    if (this.message) {
      console.log('Sending message: ', this.message);
      this.chatService.send(this.message);
      this.message = '';
    } else {
      alert('Can\'t send empty messages');
    }
  }

  ngOnInit() {
    this.chatService.refOn((messages) => {
      this.messages = messages;
    });
  }

  ngOnDestroy() {
    this.chatService.refOff();
  }

}
