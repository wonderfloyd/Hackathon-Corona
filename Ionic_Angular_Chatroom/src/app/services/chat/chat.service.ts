import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { database } from 'firebase';
import { v4 } from 'uuid';

import { Message, User } from '../../../types';
import { UserDataService } from '../user/user-data.service';

@Injectable()
export class ChatService {

  constructor(private userData: UserDataService) {}

  private get user(): Promise<User> {
    return this.userData.resolve().then((user: User) => {
      return user;
    });
  }

  private get ref(): database.Reference {
    return firebase.database().ref('Messages');
  }

  private get timestamp(): object {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  public send = async (messageText: string): Promise<void> => {
    const newMessage: Message = {
      id: v4(),
      text: messageText,
      user: await this.user,
      createdAt: this.timestamp,
    };
    console.log(`sending message id: ${newMessage.id}`);
    this.ref.push(newMessage);
  }

  private parse = (snapshot: database.DataSnapshot): Message[] => {
    const messages: Message[] = [];

    snapshot.forEach((messageSnap: database.DataSnapshot) => {
      const { createdAt, text, user, id } = messageSnap.val();
      messages.push({
        id,
        createdAt: new Date(createdAt),
        text,
        user,
      });
    });

    return messages;
  }

  public refOn(callback: (messages: Message[]) => void): void {
    this.ref.on('value', snapshot => callback(this.parse(snapshot)));
  }

  public refOff(): void {
    this.ref.off();
  }

}
