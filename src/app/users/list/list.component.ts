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

  constructor(
              // public userService: UserService
              private store: Store<AppState>
              ) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe( users => this.users = users);
    this.store.dispatch( new usersAction.LoadUsers());
  }

}
