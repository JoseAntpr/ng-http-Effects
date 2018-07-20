
import * as fromUsers from '../actions';
import { User } from '../../models/user.model';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};


export function userReducer( state = initialState, action: fromUsers.actions ): UsersState {
    switch ( action.type ) {
        case fromUsers.LOAD_USERS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUsers.LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: [...action.users],
                loading: false,
                loaded: true
            };
        case fromUsers.LOAD_USERS_FAILED:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}

