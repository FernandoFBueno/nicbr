import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class DataService {
    public user = new User();

    public messageSource = new BehaviorSubject(this.user);
    currentMessage = this.messageSource.asObservable();

    constructor() {
        this.user.Usuario = '';
        this.user.mediaDowload = 0;
        this.user.mediaUpload = 0;
    }

    changeMessage(user: User) {
        this.messageSource.next(user);
    }

}
