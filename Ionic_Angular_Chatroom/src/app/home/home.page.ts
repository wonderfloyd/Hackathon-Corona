import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public userName: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(user => {
      this.userName = user.data.name;
    });
  }

}
