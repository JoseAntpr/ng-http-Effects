import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { LoadUser } from '../../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(
            private router: ActivatedRoute,
            private store: Store<AppState>
              ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const id = params['id'];
      this.store.dispatch( new LoadUser(id));
    });
  }

}
