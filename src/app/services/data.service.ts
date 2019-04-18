import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class DataService {
    public user = '';

    public messageSource = new BehaviorSubject(this.user);
    currentMessage = this.messageSource.asObservable();

    constructor() {
        this.user = '';
    }

    changeMessage(user: string) {
        this.messageSource.next(user);
    }

}
