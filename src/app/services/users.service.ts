import { OnInit, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
    activeUsers = ['Steven', 'Rhonda'];
    inactiveUsers = ['Brad', 'Kirsty'];

    constructor(private counterService: CounterService) {}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.counterService.updateTransitionCount();
        this.activeUsers.splice(id, 1);
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.counterService.updateTransitionCount();
        this.inactiveUsers.splice(id, 1);
    }

    getActiveUsers() {
        return this.activeUsers;
    }

    getInactiveUsers() {
        return this.inactiveUsers;
    }
}
