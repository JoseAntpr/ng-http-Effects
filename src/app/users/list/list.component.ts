import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( users => this.users = users);
  }

}
