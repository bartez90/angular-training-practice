import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
    user = new User('', '', '', false);

    constructor() { }

    updateUser(user) {
        this.user = user;
    }
}
