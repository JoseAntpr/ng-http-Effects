import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] load users';
export const LOAD_USERS_FAILED = '[Users] load users failed';
export const LOAD_USERS_SUCCESS = '[Users] load users success';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUsersFailed implements Action {
    readonly type = LOAD_USERS_FAILED;

    constructor( public payload: any) {}
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor( public users: User[]) {}
}

export type actions =   LoadUsers           |
                        LoadUsersFailed     |
                        LoadUsersSuccess;
