import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';

import * as usersAction from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean;
  error: any;

  constructor(
              // public userService: UserService
              private store: Store<AppState>
              ) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe( users => this.users = users);
    this.store.select('users')
          .subscribe( users => {
            this.users = users.users;
            this.loading = users.loading;
            this.error = users.error;
          });
    this.store.dispatch( new usersAction.LoadUsers());
  }

}
