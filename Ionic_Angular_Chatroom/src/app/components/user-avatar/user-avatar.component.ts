import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() userName: string;
  userLetter: string;

  constructor() {}

  ngOnInit() {
    this.userLetter = this.userName[0].toUpperCase();
  }

}
