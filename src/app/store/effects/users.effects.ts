import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usersActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        public userService: UserService
    ) {}

    @Effect()
    loadUsers$ = this.actions$.ofType( usersActions.LOAD_USERS )
                    .pipe(
                        switchMap( () => {
                            return this.userService.getUsers()
                                .pipe(
                                    map( users => new usersActions.LoadUsersSuccess(users))
                                );
                        })
                    );

}
