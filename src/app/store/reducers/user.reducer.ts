
import * as fromUser from '../actions';
import { User } from '../../models/user.model';

export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};


export function userReducer( state = initialState, action: fromUser.useractions ): UserState {
    switch ( action.type ) {
        case fromUser.LOAD_USER:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUser.LOAD_USER_SUCCESS:
            return {
                ...state,
                user: {...action.user},
                loading: false,
                loaded: true
            };
        case fromUser.LOAD_USER_FAILED:
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
