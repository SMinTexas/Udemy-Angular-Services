import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService: UsersService,
              private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.userService.getActiveUsers();
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  getTransitionCount() {
    return this.counterService.getTransitionCount();
  }
}
