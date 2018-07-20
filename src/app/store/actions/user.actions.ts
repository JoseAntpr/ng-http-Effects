import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[User] load user';
export const LOAD_USER_FAILED = '[User] load uses failed';
export const LOAD_USER_SUCCESS = '[User] load user success';

export class LoadUser implements Action {
    readonly type = LOAD_USER;
    constructor( public id: string) {}
}

export class LoadUserFailed implements Action {
    readonly type = LOAD_USER_FAILED;

    constructor( public payload: any) {}
}

export class LoadUserSuccess implements Action {
    readonly type = LOAD_USER_SUCCESS;

    constructor( public user: User) {}
}

export type useractions =   LoadUser           |
                        LoadUserFailed     |
                        LoadUserSuccess;
